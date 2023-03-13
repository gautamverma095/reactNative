import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import PieChart from 'react-native-pie-chart';


type resultProps = {
  id: number;
  name: string;
  color: string;
};

const reportProps: resultProps[] = [
  {
    id: 1,
    name: 'correct',
    color: '#2196F3',
  },
  {
    id: 2,
    name: 'incorrect',
    color: '#F44336',
  },
];
const Result = ({route}: any) => {
  let {score, totalQuestion} = route.params;
let incorrect = totalQuestion - score;
  incorrect = Math.ceil((incorrect * 100) / totalQuestion);
  score = Math.ceil((score * 100) / totalQuestion);
  const widthAndHeight = 300;
  console.warn(score, incorrect);
  
  // console.warn(reportProps);
  const series = [incorrect, score];
   const sliceColor = ['#F44336', '#2196F3'];

  return (
    <View
      style={{
        marginLeft: 50,
        marginTop: 50,
      }}>
      <PieChart
        widthAndHeight={widthAndHeight}
        series={series}
        sliceColor={sliceColor}
      />

      <View>
        {
          <FlatList
            data={reportProps}
            renderItem={({item,index:any }) => {
              return (
                <Text>
                  {item.name}
                  {'->'}
                  <Text style={{backgroundColor:`${item.color}`,width:30}}>{"    "} </Text>
                </Text>
              );
            }}
          />
        }
      </View>
    </View>


  );
};

export default Result

const styles = StyleSheet.create({})