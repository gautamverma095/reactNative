import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import Question from './Question';
import Type from './Type';
import { Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');

type QuizProps = {
  question: string;
  options: string[];
  correct_answer: number;
  type: string;
  marked: number;
};

let arr: QuizProps[] = [
  {
    question: 'What is the pH value of the human body?',
    options: ['9.2 to 9.8', '7.0 to 7.8', '6.1 to 6.3', '5.4 to 5.6'],
    correct_answer: 2,
    type: 'multiple choice question',
    marked: -1,
  },
  {
    question: 'The capital of Australia is Sydney',
    options: ['True', 'False'],
    correct_answer: 2,
    type: 'True/False question',
    marked: -1,
  },
  {
    question: 'A century is a score of ______ or more.',
    options: ['50', '100', ' 70', '90'],
    correct_answer: 2,
    type: 'Fill in the blanks',
    marked: -1,
  },
];

type itemProp = {
  handleSelect: () => void;
  index: any;
  preVal: any;
  res: any;
};

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [questionsArr, setQuestionsArr] = useState(arr);
  const arrRef = useRef<any>()

  const handleSelect = (index: number, preVal: any) => {
    // console.warn(index,preVal);
    const tempData = [...arr];
    tempData.map((el, i) => {
      if (index == i) {
        return (el.marked = preVal);
      }
    });
    // console.warn(tempData);
    setQuestionsArr(tempData);
    // let res = []
    // tempData.map((el, ind) => {
    //   res.push(el)
    // })
    // setQuestionsArr(res)
  };
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Quiz:{currentQuestion}</Text>

      <View style={{marginTop: 10}}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          ref={arrRef}
          onScroll={(e: any) => {
            // console.warn(e.nativeEvent.contentOffset);
            let res: any = e.nativeEvent.contentOffset.x / width;
            res = res + 1;
            res = res.toFixed(0);
            // console.warn(res)
            setCurrentQuestion(+res);
          }}
          horizontal
          data={questionsArr}
          renderItem={({item, index}) => {
            return (
              <>
                {/* <Type type={item} /> */}
                <Question
                  question={item}
                  selected={(preVal: any) => handleSelect(index, preVal)}
                />
              </>
            );
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'absolute',
          bottom: 50,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'teal',
            height: 50,
            width: 130,
            borderRadius: 10,
            marginLeft: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            if (currentQuestion > 1) {
              arrRef.current.scrollToIndex({
                animated: true,
                index: +currentQuestion - 2,
              });
              //  console.warn(currentQuestion);
            }
          }}>
          <Text
            style={{
              fontSize: 30,
            }}>
            Previous
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'teal',
            height: 50,
            width: 130,
            borderRadius: 10,
            marginLeft: 80,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            //  console.warn(currentQuestion);
            if (currentQuestion < questionsArr.length) {
              // console.warn(currentQuestion);
              arrRef.current.scrollToIndex({
                animated: true,
                index: +currentQuestion,
              });
            }
          }}>
          <Text
            style={{
              fontSize: 30,
            }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
  },
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
    color: 'grey',
  },
});
