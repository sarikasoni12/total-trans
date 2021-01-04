<?php

use Illuminate\Database\Seeder;

class VendorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::statement("
            insert into `vendor` (`id`, `name`)
            value
            (1, 'TQL'),
            (2, 'Coyote'),
            (3, 'ATL'),
            (4, 'JPX'),
            (5, 'Penner Logistics'),
            (6, 'Tappers')
        ");
    }
}
