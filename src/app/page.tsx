import Image from "next/image";
import styles from "./page.module.css";
import TodoList from "./components/Todolist";

export default function Home() {
  return (
<main>
  <TodoList />
</main>

  
  );
}
