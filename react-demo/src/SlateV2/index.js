import React, { useState, useMemo, useCallback } from 'react';
import { createEditor, Editor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

const setArr = [
  {
    type: 'paragraph',
    children: [{ text: '段落中的一行文本。' }],
  },
];

export const SlateCom = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState(setArr);

  const DefaultElement = props => {
    return <p {...props.attributes}>{props.children}</p>
  }

  // 基于传递的 `props` 定义一个渲染函数。
  // 我们在这里使用 `useCallback` 在随后的渲染中记住这个函数。
  const renderElement = useCallback(props => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />
      default:
        return <DefaultElement {...props} />
    }
  }, [])

  return (
    <Slate editor={editor} initialValue={value} onChange={value => setValue(value)}>
      <Editable
        // 传递 `renderElement` 函数。
        renderElement={renderElement}
        onKeyDown={event => {
          if (event.key === '`' && event.ctrlKey) {
            // 阻止插入 "`" 的默认行为。 
            event.preventDefault()
            // 否则，把当前选择的 blocks 的类型设为 "code"。
            Transforms.setNodes(
              editor,
              { type: 'code' },
              { match: n => Editor.isBlock(editor, n) }
            )
          }
        }}
      />
    </Slate>
  );
};
