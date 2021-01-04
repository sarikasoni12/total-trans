<?php

use Illuminate\Database\Seeder;

class TeamDriverSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::statement("
            insert into `team_driver` (`id`, `team_id`, `driver_id`)
            value
            (1, 1, 1),
            (2, 1, 2),
            (3, 2, 3),
            (4, 2, 4)
        ");
    }
}
