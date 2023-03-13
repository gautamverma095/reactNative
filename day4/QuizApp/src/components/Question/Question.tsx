import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
const {width,height} = Dimensions.get("window")


type questionProp = {
  question: any;
  selected:(index:any) => void
};
const Question = ({question,selected}:questionProp) => {
  return (
    <View style={styles.viewStyle}>
      <View
        style={{
          marginLeft: 5,
        }}>
        <Text style={styles.textStyle}>{question.type}</Text>
      </View>
      <Text style={styles.textStyle}>
        {/* {'Question:'} */}
        {question.question}
      </Text>

      <View style={{marginTop: 20}}>
        <FlatList
          showsHorizontalScrollIndicator ={false}
          pagingEnabled
          data={question.options}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  width: '90%',
                  height: 60,
                  elevation: 3,
                  backgroundColor: question.marked == index+1 ? "red":"grey",
                  marginTop: 10,
                  marginBottom: 10,
                  alignSelf: 'center',
                  alignContent: 'center',
                  paddingLeft: 15,
                  flexDirection: 'row',
                }}
                onPress={() => selected(index + 1)}>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    backgroundColor: 'teal',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 12,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}>
                    {index == 0
                      ? 'A'
                      : index == 1
                      ? 'A'
                      : index == 2
                      ? 'C'
                      : 'D'}
                  </Text>
                </View>
                <Text style={styles.answerStyle}>{item}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      
    </View>
  );
}

export default Question

const styles = StyleSheet.create({
  answerStyle: {
    fontSize: 20,
    marginTop: 12,
    marginLeft: 40,
    fontWeight: 400,
  },
  touchStyle: {
    width: '90%',
    height: 60,
    elevation: 3,
    backgroundColor:  'white',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
    alignContent: 'center',
    paddingLeft: 15,
    flexDirection: 'row',
  },
  viewStyle: {
    width: width,
    // backgroundColor: 'grey',
    height: 500,
  },
  textStyle: {
    textAlign: 'center',
    height: 60,
    fontSize: 23,
    marginLeft: 15,
      marginRight: 15,
    // width:width
  },
});