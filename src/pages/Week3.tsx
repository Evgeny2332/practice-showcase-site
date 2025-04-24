
import { TaskCardWithGithub } from "@/components/TaskCardWithGithub";
import { TestDataTable } from "@/components/TestDataTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InfoCard } from "@/components/InfoCard"; // Добавляем импорт

const Week3 = () => {
  const mobileAppTask = {
    title: "Мобильное приложение",
    description: "Разработка мобильного приложения",
    githubLink: "https://github.com/Bahdan321/Study-Practice-3-course",
    screenshots: ["/public/thirdWeek/first.jpg", "/public/thirdWeek/second.jpg", "/public/thirdWeek/third.jpg", "/public/thirdWeek/fourth.jpg", "/public/thirdWeek/five.jpg", "/public/thirdWeek/six.jpg", "/public/thirdWeek/seven.jpg"],
  };

  const testData = [
    { name: "Авторизация пользователя", input: "Валидный логин, валидный пароль", expected: "Открытие рабочего окна пользователя", resultImage: "/public/thirdWeek/test1.png" },
    { name: "Авторизация пользователя", input: "Не валидный логин, валидный пароль", expected: "Вывод об ошибке", resultImage: "/public/thirdWeek/test2.png" },
    { name: "Создать заявку на кредит", input: "Сумма указана верно, Срок указан", expected: "Успешный расчет кредита", resultImage: "/public/thirdWeek/test3.png" },
    { name: "Создать заявку на кредит", input: "Сума указана неверно или не указана вовсе, Срок не указан", expected: "Вывод об ошибке", resultImage: "/public/thirdWeek/test4.png" },
    { name: "Просмотр созданных заявок", input: "Открытие окна с заявками", expected: "Список созданных заявок", resultImage: "/public/thirdWeek/test5.png" },
    { name: "Просмотр созданных заявок", input: "Открытие окна с заявками", expected: "Пустой список заявок", resultImage: "/public/thirdWeek/test6.png" },
    { name: "Принятие/отклонение заявок", input: "Нажать кнопку в зависимости от решения", expected: "Заявка удаляется и статус меняется", resultImage: "/public/thirdWeek/test7.png" },
    { name: "Принятие/отклонение заявок", input: "Нажать кнопку в зависимости от решения", expected: "Заявка не пропадает", resultImage: "/public/thirdWeek/test8.png" },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Третья неделя практики</h1>
      <div className="md:grid md:gap-8">
        <TaskCardWithGithub {...mobileAppTask} />
        <InfoCard title="Оценка програмного продукта с точки зрения эффективности использования ресурсов" text="Для информационной системы Кредит, текущая реализация выглядит достаточно неплохой. Все операции выполняются с приемлемой скоростью, данные хрантся и не удаляются, отображение расходов/доходов работает корректно." />
        <InfoCard title="Паттерн проектирования" text="В данном проекте я использовал паттерн MV. Разделил на модели и представления. А это значит, что все модули легко заменяемы и не имеют жестких завимиостей." />
        <InfoCard title="Пути дальнейшей оптимизации" text="В дальнейшем нужно будет оптимизировать запросы к БД, улучшить UI, добавить больше данных для отрисовки пользователя. Также стоит улучшить систему авторизации и добавить выход из аккаунта." />
        <Card className="w-full transition-all hover:shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Данные по тестированию</CardTitle>
          </CardHeader>
          <CardContent>
            <TestDataTable data={testData} />
          </CardContent>
        </Card>
        <InfoCard title="Разработка сайта" text="Сайт разработан на языке TypeScript, используя фреймворк React. В качестве сборщика проекта используется Vite, в качестве пакетного менеджера npm/bun. Библиотека для компонентов - shadcn/ui, стилизация - Tailwind CSS, маршрутизация - React Router, управление состоянием  - TanStack Query, линтинг - ESLint." />
      </div>
    </div>
  );
};

export default Week3;
