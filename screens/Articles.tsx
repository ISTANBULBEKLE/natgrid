import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput, ScrollView} from 'react-native';
import Realm from 'realm';
import {ArticleSchema} from '../storage/models/articles';

const realm = new Realm({schema: [ArticleSchema]});
const Articles = ({navigation}: {navigation: any}) => {
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [date, setDate] = useState('');
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const articles = realm.objects('Article');
    setArticles(articles);
  }, []);
  const handleSubmit = () => {
    realm.write(() => {
      realm.create('Article', {name, details, date});
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text>Articles Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Article Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Article Details"
        value={details}
        onChangeText={setDetails}
      />
      <TextInput
        style={styles.input}
        placeholder="Article Date"
        value={date}
        onChangeText={setDate}
      />
      <Button title="Submit" onPress={handleSubmit} />
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button
          title="Go to History"
          onPress={() => navigation.navigate('History')}
        />
      </View>
      <Text>Lis of articles</Text>
      {articles.map((article: any, index: number) => (
        <View key={index}>
          <Text>{article.name}</Text>
          <Text>{article.details}</Text>
          <Text>{article.date}</Text>
        </View>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});

export default Articles;
