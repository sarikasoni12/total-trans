<?php

use Illuminate\Database\Seeder;

class DriverSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::statement("
            insert into `driver` (`id`, `name`, `date_of_joining`)
            value
            (1, 'Gurpreet', '2020-12-01',27),
            (2, 'Anmol', '2020-12-01', 27),
            (3, 'Ramandeep', '2020-12-01', 27),
            (4, 'Rashpal', '2020-12-01', 30)
        ");
    }
}
