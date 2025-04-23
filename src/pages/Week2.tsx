
import { TaskCardWithGithub } from "@/components/TaskCardWithGithub";

const Week2 = () => {
  const task = {
    title: "Задача недели 2",
    description: "Описание задачи",
    githubLink: "https://github.com/your-username/your-repo",
    screenshots: ["URL_скриншота_1", "URL_скриншота_2"],
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Вторая неделя практики</h1>
      <TaskCardWithGithub {...task} />
    </div>
  );
};

export default Week2;
