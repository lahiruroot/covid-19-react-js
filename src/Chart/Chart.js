import Echarts from 'echarts-for-react'
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });


export default function Chart() {

    let option = {
        title: {
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '50%',
                data: [
                    {value: {Case}, name: '搜索引擎'},
                    {value: {Case}, name: '直接访问'},
                    {value: {Case}, name: '邮件营销'},
                    {value: {Case}, name: '联盟广告'},
                    {value: {Case}, name: '视频广告'}
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
  
    const [loading, setloading] = useState(false);
    const [Case, setCase] = useState(null);
      
      useEffect(() => {
          
          axios({
              method: "GET",
              url: "https://www.hpb.health.gov.lk/api/get-current-statistical",
            }).then((Response) => {
              setloading(true);
              setCase(Response.data.data.local_active_cases);
              // console.log(Response.data.data.local_active_cases);
            }).catch((error) => {
              console.log(error);
            })
         
      }, [])
    

    return (
        <div>
            <Echarts option={option} />
        </div>
    )
}
