import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import Question from '../../../components/Question/Question';
import { Dimensions } from 'react-native';
// import DragAndDropQuestion from '../../components/Draggable/Draggable';
const {width, height} = Dimensions.get('window');

type QuizProps = {
  question: string;
  options: string[];
  correct: number;
  type: string;
  marked: number;
  ans:string[]
};

let arr: QuizProps[] = [
  {
    question: 'What is the pH value of the human body?',
    options: ['9.2 to 9.8', '7.0 to 7.8', '6.1 to 6.3', '5.4 to 5.6'],
    correct: 2,
    type: 'multiple choice question',
    marked: -1,
    ans: [''],
  },
  {
    question: 'The capital of Australia is Sydney',
    options: ['True', 'False'],
    correct: 2,
    type: 'True/False question',
    marked: -1,
    ans: [''],
  },
  {
    question: 'A century is a score of ______ or more.',
    options: ['50', '100', ' 70', '90'],
    correct: 2,
    type: 'Fill in the blanks',
    marked: -1,
    ans: [''],
  },
  {
    question:
      ' Which of the following gas is reduced in the reduction process?',
    options: ['Oxygen', 'Helium', 'Carbon', 'Hydrogen'],
    correct: 4,
    type: 'multiple choice question',
    marked: -1,
    ans: [''],
  },
  {
    question: 'How Many formats are there in Cricket ?',
    options: ['India', 'USA', 'France', 'Japan'],
    correct: 3,
    type: 'multiple choice question',
    marked: -1,
    ans: [''],
  },
  {
    question: 'Match the countries with their capitals',
    options: ['1', '2', '3', '4'],
    correct: 3,
    type: 'multiple choice question',
    marked: -1,
    ans: [''],
  },
  {
    question: 'How Many formats are there in Cricket ?',
    options: ['India', 'USA', 'France', 'Japan'],
    correct: 3,
    type: 'drag',
    ans: ['New Delhi', 'Washington D.C.', 'Paris', 'Tokyo'],
    marked: -1,
  },
];

type itemProp = {
  handleSelect: () => void;
  index: any;
  preVal: any;
  res: any;
  navigation: any;
};

const Quiz = ({navigation}:any) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [questionsArr, setQuestionsArr] = useState(arr);
  const arrRef = useRef<any>()
  const [score,setScore] = useState<any>(0)

  const handleSelect = (index: number, preVal: any) => {
    // console.warn(index,preVal);
    const tempData = [...arr];
    tempData.map((el, i) => {
      if (index == i) {
        return (el.marked = preVal);
      }
    });
    // console.warn(index,preVal);
    if (preVal == questionsArr[index].correct)
    {
      setScore(score+1)
      }
    setQuestionsArr(tempData);
    // let res = []
    // tempData.map((el, ind) => {
    //   res.push(el)
    // })
    // setQuestionsArr(res)


  };


  const handleReset = () => {
    const tempData = [...arr];
    tempData.map((el, i) => {
     
        return (el.marked = -1);
    });
    setQuestionsArr(tempData);
  
  }
  return (
    <View style={styles.viewStyle}>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={styles.textStyle}>Quiz:{currentQuestion}</Text>
        <Text
          onPress={() => {
            handleReset()
            arrRef.current.scrollToIndex({
              animated: true,
              index:0
            })
          }}
          
          style={{
            fontSize: 25,
            textAlign: 'center',
            color: 'black',
            backgroundColor: 'teal',
            borderRadius: 10,
            borderColor: 'teal',
            borderWidth: 3,
            marginTop: 5,
            marginRight: 6,
          }}>
          Reset Quiz
        </Text>
      </View>

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
                <Question
                  question={item}
                  selected={(preVal: any) => handleSelect(index, preVal)}
                />
                {/* {
                  item.type == 'drag' ? (
                  <DragAndDropQuestion
                    question={item} 
                    answers={item.ans}
                    onAnswered={function (correct: boolean): void {
                      throw new Error('Function not implemented.');
                    } }                    // selected={(preVal: any) => handleSelect(index, preVal)}
                  />
                ) : (
                  <Question
                    question={item}
                      selected={(preVal: any) =>
                        handleSelect(index, preVal)}
                  />
                )} */}
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
            backgroundColor: currentQuestion>1? 'teal':"grey",
            height: 50,
            // disabled:{currentQuestion == 1? true:false},
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
        {currentQuestion == arr.length ? (
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              height: 50,
              width: 130,
              borderRadius: 10,
              marginLeft: 80,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              navigation.navigate('Result', {
                score: score,
                totalQuestion: arr.length,
              });
            }}>
            <Text
              style={{
                fontSize: 30,
                color: 'white',
              }}>
              Submit
            </Text>
          </TouchableOpacity>
        ) : (
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
              
                if (questionsArr[currentQuestion-1].marked !== -1)
                {
                  //  console.warn(currentQuestion);
                  if (currentQuestion < questionsArr.length) {
                    // console.warn(currentQuestion);
                    arrRef.current.scrollToIndex({
                      animated: true,
                      index: +currentQuestion,
                    });
                  }
                }
             
            }}>
            <Text
              style={{
                fontSize: 30,
              }}>
              Next
            </Text>
          </TouchableOpacity>
        )}
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
