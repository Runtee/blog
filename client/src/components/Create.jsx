import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function Create() {
  const editorRef = useRef(null);
  const [text, setText] = useState("");

  const log = () => {
    if (editorRef.current) {
      setText(editorRef.current.getContent());
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <div>
        <Editor
          apiKey="1y7nixb0f8w2aukpllckyn86bts3vkv94jylbciykdbfyc8a"
          initialValue="<p>Initial content</p>"
          init={{
            height: 700,
            // menubar: false,
            plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "print",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "paste",
                "code",
                "help",
                "wordcount",
              ],
                        
            toolbar:
             [ "undo redo | formatselect | bold italic backcolor | \
      alignleft aligncenter alignright alignjustify | \
      bullist numlist outdent indent | removeformat | help"],
            formats: {
              removeformat: [
                {
                  selector: "*",
                  remove: "all",
                  split: true,
                  expand: false,
                  block_expand: true,
                  deep: true,
                },
                {
                  selector: "code",
                  remove: "none",
                  split: false,
                  expand: false,
                  block_expand: true,
                  deep: true,
                },
              ],
              bold: { inline: "b" },
              italic: { inline: "i" },
              underline: { inline: "u" },
              strikethrough: { inline: "s" },
              subscript: { inline: "sub" },
              superscript: { inline: "sup" },
              alignleft: {
                selector: "p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li",
                classes: "align-left",
              },
              aligncenter: {
                selector: "p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li",
                classes: "align-center",
              },
              alignright: {
                selector: "p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li",
                classes: "align-right",
              },
              alignjustify: {
                selector: "p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li",
                classes: "align-justify",
              },
            },
          }}
          onChange={(content, editor) => {
            console.log("Content was updated:", content);
          }}
        />

        <button className="bg-gray border-amber-500" onClick={log}>
          Log editor content
        </button>
      </div>
      <div
        className="p-5 m-5 blog"
        dangerouslySetInnerHTML={{ __html: text }}
      ></div>
    </>
  );
}
