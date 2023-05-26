import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Alert,
    StatusBar,
} from 'react-native';
import React, { useState } from 'react';

import Task from './components/Task';
import styles from './App.components.style';
import Form from './components/Form';

const App = () => {
    const [taskList, setTaskList] = useState([]);
    const handleAddTask = (task) => {
        setTaskList([...taskList, task]);
    };
    const handleDeleteTask = (index) => {
        Alert.alert('Warning', 'Are you sure to delete this task?', [
            {
                text: 'Cancel',
                onPress: () => {},
            },
            {
                text: 'OK',
                onPress: () => {
                    let taskListTmp = [...taskList];
                    taskListTmp.splice(index, 1);
                    setTaskList(taskListTmp);
                },
            },
        ]);
    };
    return (
        
        <View style={styles.container}>
            <StatusBar
                barStyle="dark-content" // Kiểu hiển thị của nội dung trong thanh công cụ
                backgroundColor="#E8F0F2" // Màu nền cho thanh công cụ
                translucent={true} // Đặt thành true nếu bạn muốn thanh công cụ trong suốt
        />
            <View style={styles.body}>
                <Text style={styles.header}>Todo List</Text>
                <ScrollView style={styles.items}>
                    {taskList.map((item, index) => {
                        return (
                            <Task
                                key={index}
                                title={item}
                                number={index + 1}
                                onDeleteTask={() => handleDeleteTask(index)}
                            />
                        );
                    })}
                </ScrollView>
            </View>
            <Form onAddTask={handleAddTask} />
        </View>
    );
};

export default App;
