
import { TaskCardWithCode } from "@/components/TaskCardWithCode";

const Week1 = () => {
  const tasks = [
    {
      title: "Задача 1",
      description: "Описание задачи 1",
      screenshot: "URL_скриншота_1",
      code: "// Код задачи 1",
    },
    // Добавьте остальные задачи здесь
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Первая неделя практики</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {tasks.map((task, index) => (
          <TaskCardWithCode key={index} {...task} />
        ))}
      </div>
    </div>
  );
};

export default Week1;
