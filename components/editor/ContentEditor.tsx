"use client"
import React, { useRef } from 'react';
// import { Editor } from '@tinymce/tinymce-react';

import dynamic from 'next/dynamic';
import tinymce from 'tinymce/tinymce';
import { useEffect, useState } from 'react';

import { Editor } from '@tinymce/tinymce-react';

export default function ContentEditor() {
    const editorRef: any = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    return (
        <>
            <Editor
                id='editor'
                apiKey='f1npif15ag3lt71rqltjkzb1f40rpsreppi8vpl5ccgountu'
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
            <button onClick={log}>Log editor content</button>
        </>
    );
}