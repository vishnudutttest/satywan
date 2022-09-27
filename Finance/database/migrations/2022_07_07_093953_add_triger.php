<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTriger extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::unprepared("
        CREATE TRIGGER create_installment AFTER INSERT ON `BorrowLists` FOR EACH ROW
        BEGIN

        declare start_no_of_installment INT default 1;
        DECLARE ins_date DATETIME;
        
        
        SET ins_date  = NEW.installmentStartDate;
        
        WHILE start_no_of_installment <= NEW.no_of_installment DO
        INSERT INTO installment SET borrowId = NEW.id,instalmentNumber=start_no_of_installment,installmentAmount=NEW.installmentAmount,
        installmentDate=ins_date,paidStatus=0,created_at=CURRENT_TIMESTAMP,
        updated_at=CURRENT_TIMESTAMP;
        IF  NEW.intallmentType='daily' THEN
        SET ins_date = DATE_ADD(ins_date, INTERVAL 1 DAY);
        ELSEIF NEW.intallmentType='monthly' THEN
        SET ins_date = DATE_ADD(ins_date, INTERVAL 1 MONTH);
        END IF;
        
        SET start_no_of_installment = start_no_of_installment+1;
        END WHILE;
        
        END
        ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::unprepared('DROP TRIGGER `create_installment`');
    }
}
