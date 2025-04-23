
import { TaskCardWithGithub } from "@/components/TaskCardWithGithub";

const Week3 = () => {
  const tasks = [
    {
      title: "Мобильное приложение",
      description: "Разработка мобильного приложения",
      githubLink: "https://github.com/Besego/Reklamka/blob/main/second-week/app-release.apk",
      screenshots: ["/public/imagesMobile/first.jpg", "public/imagesMobile/second.jpg","public/imagesMobile/third.jpg","public/imagesMobile/fourth.jpg","public/imagesMobile/five.jpg","public/imagesMobile/six.jpg","public/imagesMobile/seven.jpg","public/imagesMobile/eight.jpg","public/imagesMobile/nine.jpg","public/imagesMobile/ten.jpg"],
    },
    {
      title: "Данные по тестированию",
      description: "Описание",
      screenshots: ["/public/imagesMobile/test1.png", "/public/imagesMobile/test2.png","/public/imagesMobile/test3.png","/public/imagesMobile/test4.png","/public/imagesMobile/test5.png","/public/imagesMobile/test6.png","/public/imagesMobile/test7.png"],
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
