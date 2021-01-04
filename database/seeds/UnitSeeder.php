<?php

use Illuminate\Database\Seeder;

class UnitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::statement("
            insert into `unit` (`id`, `type`, `name`, `number_plate`, `date_of_purchase`, `installment_amount`, `insurance_amount`)
            value
            (1, 'truck', 'Unit-121', '', '2020-12-01', 2000, 2350),
            (2, 'truck', 'Unit-122', '', '2020-12-01', 4263, 2945),
            (3, 'trailer', 'Ref-112', '', '2020-12-01', 1300, 0),
            (4, 'trailer', 'Ref-113', '', '2020-12-01', 1640, 0)
        ");
    }
}
