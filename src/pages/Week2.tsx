
import { TaskCardWithGithub } from "@/components/TaskCardWithGithub";

const Week2 = () => {
  const task = {
    title: 'Разработка АИС "Рекламное агентсво"',
    description: "Система предназначена для автоматизации взаимодействия клиентов и рекламного агентства, включая регистрацию, оформление заказов, их обработку, генерацию контрактов и управление заявками.",
    githubLink: "https://github.com/Besego/Reklamka",
    screenshots: ["/public/images/ERD.png", "/public/images/ChoiceDiagramm.png", "/public/images/StateDiagramm.png", "/public/images/MainFunc.png", "/public/images/DetailSchema.png", "/public/images/BigDiagramm.jpg", "/public/images/SecondBigDiagramm.jpg", "/public/imagesDesktop/First.png","public/imagesDesktop/Second.png","public/imagesDesktop/Third.png","public/imagesDesktop/Fourth.png","public/imagesDesktop/Five.png","public/imagesDesktop/Six.png","public/imagesDesktop/Seven.png"],
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Вторая неделя практики</h1>
      <TaskCardWithGithub {...task} />
    </div>
  );
};

export default Week2;
