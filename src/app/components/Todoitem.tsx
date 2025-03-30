"use client"; 

interface TodoItemProps {
    task: string;
    onDelete:() => void;
}

export default function TodoItem({ task, onDelete }: TodoItemProps) {
    return (
        <li className="todo-item">
        <span className="span">{task}</span>
        <button className="button-item"  onClick={onDelete}>Delete</button>
        </li>
    );
}
