<?php
namespace App\Http\Entity;

class EmailEntity
{
    public $toEmail;
    public $fromEmail;
    public $subject;
    public $message;
    public $attachments = [];
}
