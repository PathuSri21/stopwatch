import React, {Component} from 'react';
import { ScrollView, FlatList, StyleSheet, Text } from 'react-native';

let padToTwo = (number) => (number <= 9 ? `0${number}`: number);

class ListComponent extends Component {

     render() {
        return (
            <ScrollView style={styles.scroll}>
                <FlatList
                    data={this.props.lap}
                    renderItem={({item, index}) => <Text key={index+1} style={styles.item}>{`#${index}            `}{padToTwo(item.min)}:{padToTwo(item.sec)}:{padToTwo(item.msec)}</Text>}
                />
            </ScrollView>
        );
     }
}

const styles = StyleSheet.create({
    scroll: {
        maxHeight: "63%",
        backgroundColor: "#C89933",
        marginTop: 25,
    },

    item: {
        padding: 10,
        fontSize: 22,
        height: 44,
        color: "#5C415D",
        textAlign: "center",
        backgroundColor: "#fff",
        marginBottom: 1
    },
})

export default ListComponent;