import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Box } from '@mui/material';

export default function App({write,setWrite}) {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      setWrite(editorRef.current.getContent())
      // console.log(write);
    }
  };
  return (
    <Box sx={{ backgroundColor: "#ffff", padding: "5% 5%", flexGrow: 1 }}>
    <Editor
        apiKey='1y7nixb0f8w2aukpllckyn86bts3vkv94jylbciykdbfyc8a'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: true,
          plugins: [
            'paste', 'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          paste_as_text: false,
            valid_elements: '*[*]',
            valid_attributes: '*',
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
        }}
      />
      <button onClick={log}>Log editor content</button>
    </Box>
  );
}