import * as React from 'react';
import TopBar from './Details/TopBar.js';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';



//const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData2022 = [15, 1, 5, 10, 10, 5, 5, 5, 5, 10, 15, 15];
const pData2023 = [7, 7, 7, 5, 7, 10, 5, 5, 5, 5, 5, 7];
const pData = [7, 7, 7, 5, 7, 10, 5, 5, 5, 5, 5, 7];//,5

const pDataForPredicted = pData2022.concat(pData2023);
const xLabels = [
  'Январь 2023',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
  'Январь 2024'
];

const xLabels2 = [
    'Январь 2023',//1
    'Февраль 2023',//2
    'Март 2023',//3
    'Апрель 2023',//4
    'Май 2023',//5
    'Июнь 2023',//6
    'Июль 2023',//7
    'Август 2023',//8
    'Сентябрь 2023',//9
    'Октябрь 2023',//10
    'Ноябрь 2023',//11
    'Декабрь 2023',//12
    'Январь 2024',//13
    'Февраль 2024',//14
    //'Март 2024',//15
    //'Апрель 2024'//16
    
  ];
const balls_p = [1, 5, 7, 10, 15, 5, 5];
const students = [
    'Притчин Максим Иванович',
    'Сингур Максим Дмитриевич',
    'Крючков Владимир Ильич',
    'Крутикова Анфиса Викторовна',
    'Виноградова Софья Юрьевна',
    'Батманов Артём Андреевич',
    'Сушко Ярослав Никитич'	
];

export default function Statistics() {

   let forecast = require('nostradamus')
   let alpha = 0.5  // overall smoothing component
  , beta = 0.4   // trend smoothing component
  , gamma = 0.6  // seasonal smoothing component
  , period = 6   // # of observations per season
  , m = 2   // # of future observations to forecast
  , predictions = [];

predictions = forecast(pDataForPredicted, alpha, beta, gamma, period, m);
    let predictions_display = [];
    pData.map((item)=>predictions_display.push(item))
    //console.log(predictions.length);
    predictions_display.push(predictions[22]);
    predictions_display.push(predictions[23]);
    //predictions_display.push(predictions[14]);
    //predictions_display.push(predictions[15]);
    //predictions_display.push(predictions[15]);
    //let predictions_display=[];
    //for (let i = 0; i < 15; i++) {
    //    predictions_display.push(i);
     // }
    
    
    return (
        <div>
            <TopBar/>
            <div style={{ height: 400, width: '500px', marginLeft:'330px', position: 'relative' }}>
                <LineChart
                    width={1000}
                    height={300}
                    series={[
                        { data: pData, label: 'Результативность педагога' },
                        //{ data: uData, label: 'uv' },
                            ]}
                        xAxis={[{ scaleType: 'point', data: xLabels }]}
                />
            </div>
            <div style={{ height: 400, width: '1000px', marginLeft:'330px', position: 'relative',align:'right' }}>
                <BarChart
                    xAxis={[{ scaleType: 'band', data: [
                    'Максим П.',
                    'Максим С.',
                    'Владимир К.',
                    'Анфиса К.',
                    'Софья В.',
                    'Артем Б.',
                    'Ярослав С.',
                    ] }]}
                    series={[{ data: [15, 7, 10, 5, 7, 7, 10], label: 'Группа ПМ-7'  }]}
                    
                    width={1000}
                    height={300}
                    align='right'
                
                />
            </div>

            <div style={{ height: 400, width: '500px', marginLeft:'330px', position: 'relative' }}>
                <LineChart
                    width={1000}
                    height={300}
                    series={[
                        { data: pData, label: 'Результативность педагога за 2023 год' },
                        { data: [null, null,null, null,null, null,null, null,null, null,null,pData[11],predictions[22],predictions[23]], label: 'Предсказанная результативность за два следующих месяца',
                        valueFormatter: (value) => (value == null ? '?' : value.toString()),
                    },
                        //{ data: uData, label: 'uv' },
                            ]}
                        xAxis={[{ scaleType: 'point', data: xLabels2 }]}
                />
            </div>
        </div>
    );
  }