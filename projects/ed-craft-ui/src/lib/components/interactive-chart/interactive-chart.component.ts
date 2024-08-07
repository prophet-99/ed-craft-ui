import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

import { Chart, registerables, type ChartConfiguration } from 'chart.js';
Chart.register(...registerables);

import { type InteractiveChartDatasetModel } from './interactive-chart.model';

@Component({
  selector: 'ed-craft-interactive-chart',
  templateUrl: './interactive-chart.component.html',
  styles: ``,
})
export class InteractiveChartComponent implements AfterViewInit {
  @Input({ required: true }) public title!: string;
  @Input({ required: true }) public labels: string[] = [];
  @Input({ required: true }) public datasets: InteractiveChartDatasetModel[] =
    [];
  @ViewChild('chartCanvas')
  private _chartCanvasRef!: ElementRef<HTMLCanvasElement>;
  private _chartRef!: Chart;
  private _chartType: 'bar' | 'line' = 'bar';

  ngAfterViewInit(): void {
    this._chartRef = new Chart(
      this._chartCanvasRef.nativeElement,
      this._setChartConfig()
    );
  }

  private _setChartConfig(): ChartConfiguration {
    return {
      type: this._chartType,
      data: {
        labels: this.labels,
        datasets: this.datasets,
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: { color: '#9ca3af' },
          },
        },
        scales: {
          x: {
            ticks: { color: '#fff' },
            grid: { color: '#a2aec57d' },
          },
          y: {
            ticks: { color: '#fff' },
            grid: { color: '#a2aec57d' },
          },
        },
      },
    };
  }

  public toggleChart(): void {
    this._chartRef.destroy();
    this._chartType = this._chartType === 'line' ? 'bar' : 'line';
    this._chartRef = new Chart(
      this._chartCanvasRef.nativeElement,
      this._setChartConfig()
    );
  }
}
