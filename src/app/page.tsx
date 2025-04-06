import Image from "next/image";
import styles from "./page.module.css";
import TodoList from "./components/Todolist";
import DailyBible from "./components/dailybible";
export default function Home() {
  return (

    
<main>
<DailyBible />
  <TodoList />
  
</main>

  
  );
}
