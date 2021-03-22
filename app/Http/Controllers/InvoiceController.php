<?php

namespace App\Http\Controllers;
use App\Http\Repositories\TripDocumentRepository;
use App\Http\Repositories\TripRepository;
use App\Models\CompanyModel;
use App\Models\InvoiceNumberModel;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;
use Spipu\Html2Pdf\Html2Pdf;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use TijsVerkoyen\CssToInlineStyles\CssToInlineStyles;

class InvoiceController
{
    /**
     * @var TripRepository
     */
    private $tripRepository;
    /**
     * @var TripDocumentRepository
     */
    private $tripDocumentRepository;

    /**
     * InvoiceController constructor.
     */
    public function __construct(TripRepository $tripRepository, TripDocumentRepository $tripDocumentRepository)
    {
        $this->tripRepository = $tripRepository;
        $this->tripDocumentRepository = $tripDocumentRepository;
    }

    public function preview(Request $request, $tripId)
    {
        $tripId = (int)$tripId;
        $trip = $this->tripRepository->getByIdForInvoice($tripId);
        $company = CompanyModel::query()->where('id', 1)->first();
        $invoiceNumber = InvoiceNumberModel::query()->where('company_id', 1)->first();
        $data = [
            'trip' => $trip,
            'company' => $company,
            'invoice_number' => $invoiceNumber->last_invoice_number+1
        ];
        $html = view('invoice', $data)->render();

        $cssToInlineStyles = new CssToInlineStyles();
        $css = file_get_contents(__DIR__ . '/../../../public/css/invoice.css');

        $styledHtml = $cssToInlineStyles->convert(
            $html,
            $css
        );

        $html2pdf = new Html2Pdf();
        $html2pdf->writeHTML($styledHtml);
        $invoiceName = "trip-$tripId-invoice.pdf";
        $html2pdf->output($invoiceName, 'I');
    }
    public function generate(Request $request, $tripId)
    {
        $tripId = (int)$tripId;
        $trip = $this->tripRepository->getByIdForInvoice($tripId);
        $company = CompanyModel::query()->where('id', 1)->first();
        $invoiceNumber = InvoiceNumberModel::query()->where('company_id', 1)->first();
        $data = [
            'trip' => $trip,
            'company' => $company,
            'invoice_number' => $invoiceNumber->last_invoice_number+1,
        ];
        $html = view('invoice', $data)->render();

        $cssToInlineStyles = new CssToInlineStyles();
        $css = file_get_contents(__DIR__ . '/../../../public/css/invoice.css');

        $styledHtml = $cssToInlineStyles->convert(
            $html,
            $css
        );

        $html2pdf = new Html2Pdf();
        $html2pdf->writeHTML($styledHtml);
        $invoiceName = "trip-$tripId-invoice.pdf";

        $updated = $this->tripRepository->updateTripInvoiceNumber($tripId, $invoiceNumber->last_invoice_number+1);
        if($updated){
            InvoiceNumberModel::query()->where('company_id', 1)->increment('last_invoice_number');
            $html2pdf->output($invoiceName, 'D');
        }
    }

    public function getNextInvoiceNumber()
    {
        $invoiceNumber = InvoiceNumberModel::query()->where('company_id', 1)->first();
        return new JsonResponse(['next_invoice_number' => $invoiceNumber->last_invoice_number+1], 200);
    }
}
