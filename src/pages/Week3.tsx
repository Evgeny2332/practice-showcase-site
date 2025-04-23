
import { TaskCardWithGithub } from "@/components/TaskCardWithGithub";

const Week3 = () => {
  const tasks = [
    {
      title: "Задача 1",
      description: "Описание задачи 1",
      githubLink: "https://github.com/your-username/repo-1",
      screenshots: ["URL_скриншота_1", "URL_скриншота_2"],
    },
    {
      title: "Задача 2",
      description: "Описание задачи 2",
      githubLink: "https://github.com/your-username/repo-2",
      screenshots: ["URL_скриншота_1", "URL_скриншота_2"],
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Третья неделя практики</h1>
      <div className="grid gap-8">
        {tasks.map((task, index) => (
          <TaskCardWithGithub key={index} {...task} />
        ))}
      </div>
    </div>
  );
};

export default Week3;
