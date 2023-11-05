import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const NoteDetail = ({ navigation, route }) => {
    const [noteTitle, setNoteTitle] = useState('');
    const [noteText, setNoteText] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [noteId, setNoteId] = useState(null);
    const date = new Date();
    const formattedDate = date.toLocaleString();
    useEffect(() => {
        if (route.params && route.params.note) {
            setIsEditing(true);
            setNoteId(route.params.note.id);
            setNoteTitle(route.params.note.title);
            setNoteText(route.params.note.text);
        }
    }, [route.params]);

    const handleSaveNote = () => {
        if (isEditing) {
            // Update the existing note (implement your storage/database logic here)
        } else {
            // Create a new note (implement your storage/database logic here)
        }

        navigation.navigate('NoteMain', { savedNote: { userId: null, noteId: noteId, title: noteTitle, text: noteText, date: formattedDate } });
    };

    const handleDeleteNote = () => {
        if (noteId) {
            // Delete the note (implement your storage/database logic here)
        }

        navigation.navigate('NoteMain');
    };

    return (
        <View style={styles.container}>
            <Text>{isEditing ? 'Edit Note' : 'Create New Note'}</Text>
            <TextInput
                placeholder="Enter your note title"
                value={noteTitle}
                onChangeText={(text) => setNoteTitle(text)}
            />
            <TextInput
                placeholder="Enter your note content"
                value={noteText}
                onChangeText={(text) => setNoteText(text)}
            />
            <Button title="Save Note" onPress={handleSaveNote} />
            {isEditing && (
                <Button title="Delete Note" onPress={handleDeleteNote} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

export default NoteDetail;
