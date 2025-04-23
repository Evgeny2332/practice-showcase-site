
import { TaskCardWithGithub } from "@/components/TaskCardWithGithub";
import { TestDataTable } from "@/components/TestDataTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InfoCard } from "@/components/InfoCard"; // Добавляем импорт

const Week3 = () => {
  const mobileAppTask = {
    title: "Мобильное приложение",
    description: "Разработка мобильного приложения",
    githubLink: "https://github.com/Bahdan321/Study-Practice-3-course",
    screenshots: ["/public/thirdWeek/first.jpg", "/public/thirdWeek/second.jpg", "/public/thirdWeek/third.jpg", "/public/thirdWeek/fourth.jpg", "/public/thirdWeek/five.jpg", "/public/thirdWeek/six.jpg", "/public/thirdWeek/seven.jpg", "/public/thirdWeek/eight.jpg", "/public/thirdWeek/nine.jpg"],
  };

  const testData = [
    { name: "Зарегистрировать нового пользователя", input: "Валидная почта,валидный логин,валидный пароль", expected: "Запись о пользователе добавлена", resultImage: "/public/thirdWeek/test1.png" },
    { name: "Зарегистрировать нового пользователя", input: "Неваалидная почта,валидный логин,валидный пароль", expected: "Вывод об ошибке", resultImage: "/public/thirdWeek/test2.png" },
    { name: "Войти в систему под пользователем", input: "Данные от существующего аккаунта", expected: "Успешный вход в аккаунт", resultImage: "/public/thirdWeek/test3.png" },
    { name: "Войти в систему под пользователем", input: "Данные от не существующего аккаунта", expected: "Вывод об ошибке", resultImage: "/public/thirdWeek/test4.png" },
    { name: "Создать счет", input: "Ввести данные счета", expected: "Запись о счете добавлена", resultImage: "/public/thirdWeek/test5.png" },
    { name: "Добавить доход", input: "Ввести данные дохода, но не выбрать категорию", expected: "Кнопка создать не будет активной", resultImage: "/public/thirdWeek/test6.png" },
    { name: "Добавить доход", input: "Ввести данные дохода и выбрать категорию", expected: "Кнопка создать будет активной", resultImage: "/public/thirdWeek/test7.png" },
    { name: "Добавить расход", input: "Ввести данные дохода, но не выбрать категорию", expected: "Кнопка создать не будет активной", resultImage: "/public/thirdWeek/test8.png" },
    { name: "Добавить расход", input: "Ввести данные дохода и выбрать категорию", expected: "Кнопка создать будет активной", resultImage: "/public/thirdWeek/test9.png" },
    { name: "Выбрать счет 'Кошелек'", input: "Нажать на счет “Кошелек” в выпадающем списке", expected: "Счет “Кошелек” будет выбран", resultImage: "/public/thirdWeek/test10.png" },
    { name: "Установить фильтр просмотра транзакций на 'Текущий месяц'", input: "Нажать на кнопку месяц на домашнем экране", expected: "Отобразятся транзакции за текущий месяц", resultImage: "/public/thirdWeek/test11.png" },
    { name: "Выйти из системы", input: "Нажать на кнопку выхода", expected: "Пользователь попадет на экран авторизации", resultImage: "/public/thirdWeek/test12.png" },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Третья неделя практики</h1>
      <div className="md:grid md:gap-8">
        <TaskCardWithGithub {...mobileAppTask} />
        <InfoCard title="Оценка програмного продукта с точки зрения эффективности использования ресурсов" text="Для персонального финансового менеджера, текущая реализация выглядит достаточно эффективной. Все операции выполняются с приемлемой скоростью, данные хрантся и не удаляются, отображение расходов/доходов работает корректно." />
        <InfoCard title="Паттерн проектирования" text="В данном проекте я применил паттерн 'Singelton' для БД. Singleton гарантирует, что в приложении будет только один экземпляр объекта для работы с базой данных. Это предотвращает создание множества подключений к базе данных.Поскольку все запросы к базе данных проходят через один экземпляр, легче обеспечить согласованность операций." />
        <InfoCard title="Пути дальнейшей оптимизации" text="В дальнейшем нужно будет оптимизировать запросы к БД, улучшить UI, добавить графики для расходов/доходов за определенный период времени, добавить возможность создания категории, добавить больше иконок." />
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
