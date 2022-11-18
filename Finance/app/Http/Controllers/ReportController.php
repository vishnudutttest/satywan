<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//use App\Models\Borrowlist;
//use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ReportController extends Controller
{
    public function DashboardReport()
    {
        $query = "SELECT SUM(installmentAmount) as total, (
             CASE WHEN paidStatus = 1 THEN 'Paid' ELSE 'Unpaid' END ) AS Status 
             FROM `installment` 
            WHERE installmentDate = CURDATE() GROUP BY paidStatus;";
        $report = DB::Select($query);
        $retrun['today'] = $this->todayReport();
        $retrun['week'] = $this->thisWeekReport();
        $retrun['month'] = $this->thisMonthReport();
        return $retrun;
    }

    public function todayReport()
    {
        $query = "SELECT SUM(installmentAmount) as total, (
            CASE WHEN paidStatus = 1 THEN 'Paid' ELSE 'Unpaid' END ) AS Status 
            FROM `installment` 
           WHERE installmentDate = CURDATE() GROUP BY paidStatus;";
       $report = DB::Select($query);
       return $report[0];
    }

    public function thisWeekReport()
    {
        $week = $this->x_week_range2(date("Y-m-d"));
        $report = $this->reportBetweenDates($week[0] ,$week[0]);
        return $report;
    }

    public function thisMonthReport()
    {
        $start = date("Y-m-01");
        $end = $this->last_date_of_month($start);
        $report = $this->reportBetweenDates($start ,$end);
        return $report;
    }

    public function reportBetweenDates($start_date,$end_date){
        $query = "SELECT SUM(installmentAmount) as total, (
            CASE WHEN paidStatus = 1 THEN 'Paid' ELSE 'Unpaid' END ) AS Status 
            FROM `installment` 
           WHERE installmentDate between '{$start_date}' AND '{$end_date}' GROUP BY paidStatus;";
       $report = DB::Select($query);
       return $report;
    }

    private function x_week_range2($date) {
        $ts = strtotime($date);
        $start = strtotime('sunday this week -1 week', $ts);
        $end = strtotime('sunday this week', $ts);
        return array(date('Y-m-d', $start), date('Y-m-d', $end));
    }

    private function last_date_of_month($datestring)
    {
            // Converting string to date
            $date = strtotime($datestring);
            // Last date of current month.
            return $lastdate = date("Y-m-t", $date);
    }

}