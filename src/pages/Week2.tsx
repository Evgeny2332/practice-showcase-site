
import { TaskCardWithGithub } from "@/components/TaskCardWithGithub";

const Week2 = () => {
  const task = {
    title: 'Разработка АИС "Персональный Финансовый менеджер"',
    description: "Приложение, разработанное для того, чтобы помочь вам легко и удобно управлять вашими личными финансами",
    githubLink: "https://github.com/Bahdan321/Study-Practice-3-course",
    screenshots: ["/public/secondWeek/ERD.png", "/public/secondWeek/ChoiceDiagramm.png", "/public/secondWeek/StateDiagramm.png", "/public/secondWeek/StateDiagramm.png", "/public/secondWeek/DetailSchema.png", "/public/secondWeek/BigDiagramm.jpg", "/public/secondWeek/SecondBigDiagramm.jpg", "/public/secondWeek/First.png", "public/secondWeek/Second.png", "public/secondWeek/Third.png", "public/secondWeek/Fourth.png", "public/secondWeek/Five.png", "public/secondWeek/Six.png", "public/secondWeek/Seven.png", "public/secondWeek/Eight.png", "public/secondWeek/Nine.png", "public/secondWeek/Ten.png"],
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Вторая неделя практики</h1>
      <TaskCardWithGithub {...task} />
    </div>
  );
};

export default Week2;
