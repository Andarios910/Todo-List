import React from 'react'

export default function TodoItem({task, complete}) {
    return (
        <div className={complete ? 'line-through': '' } >
            {task}
        </div>
    )
}
