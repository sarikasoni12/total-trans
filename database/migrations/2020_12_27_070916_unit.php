<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Unit extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        \DB::statement("
                create table unit (
                    id int(11) primary key not null AUTO_INCREMENT,
                    type enum('truck', 'trailer') not null,
                    name varchar (255) not null,
                    number_plate varchar (255) not null,
                    date_of_purchase date not null,
                    installment_amount float not null,
                    insurance_amount float not null
                )
                ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        \DB::statement("drop table unit");
    }
}
