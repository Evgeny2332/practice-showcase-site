
import { TaskCardWithCode } from "@/components/TaskCardWithCode";

const Week1 = () => {
  const tasks = [
    {
      title: "1.1 Задача линейного алгоритма",
      description: "Задумали число. Если его увеличить на 15, а результат умножить на 4, получится 100. Какое число задумали?",
      screenshot: "/public/images/firstTask.png",
      code: "# Определяем переменную x, которая будет нашим задуманным числом\nx = (100 / 4) - 15\n# Выводим результат\nprint('Задуманное число:', int(x))",
    },
    {
      title: "1.2 Задача разветвляющегося алгоритма",
      description: "Минимум из двух чисел. Сравните два числа и выведите меньшее.",
      screenshot: "/public/images/secondTask.png",
      code: "number1 = float(input('Введите первое число: '))\nnumber2 = float(input('Введите второе число: '))\nif number1 < number2:\nminimum = number1\n else:\nminimum = number2\nprint('Минимум из двух чисел':, minimum)",
    },
    {
      title: "1.3 Задача циклического алгоритма",
      description: "Таблица умножения. Выведите таблицу умножения для числа K (например, от 1 до 10).",
      screenshot: "/public/images/thirdTask.png",
      code: "while True:\n    try:\n        K = int(input(\"Введите число для создания таблицы умножения: \"))\n        break\n    except ValueError:\n        print(\"Ошибка: Введено не целое число. Пожалуйста, попробуйте снова.\")\n\nprint(f\"Таблица умножения для числа {K}:\")\nfor i in range(1, 11):\n    result = K * i\n    print(f\"{K} x {i} = {result}\")",
    },
    {
      title: "1.4 Задача на проектирование классов",
      description: "Класс 'Студент' Создайте класс Student с полями name, age, grade. Добавьте метод для вывода информации о студенте.",
      screenshot: "/public/images/fourthTask.png",
      code: "class Student:\n    def __init__(self, name, age, grade):\n        self.name = name\n        self.age = age\n        self.grade = grade\n\n    def display_info(self):\n        print(f\"Студент: {self.name}, Возраст: {self.age}, Класс: {self.grade}\")\n\nclass GraduateStudent(Student):\n    def __init__(self, name, age, grade, thesis_title):\n        super().__init__(name, age, grade)\n        self.thesis_title = thesis_title\n\n    def display_info(self):\n        super().display_info()\n        print(f\"Тема дессертации: {self.thesis_title}\")\n\nclass UndergraduateStudent(Student):\n    def __init__(self, name, age, grade, major):\n        super().__init__(name, age, grade)\n        self.major = major\n\n    def display_info(self):\n        super().display_info()\n        print(f\"Специальность: {self.major}\")  \n\nstudent1 = Student(\"Иван\", 20, \"A\")\ngraduateStudent = GraduateStudent(\"Александр\", 22, \"В\", \"Уроки пайтона\")\nundergraduateStudent = UndergraduateStudent(\"Михаил\", 23, \"Г\", \"Программист\")\n\nstudent1.display_info()\ngraduateStudent.display_info()\nundergraduateStudent.display_info()",
    },
    {
      title: "1.5 Задача с графическим интерфейсом",
      description: "Простой чат. Создайте простой текстовый чат для обмена сообщениями между двумя пользователями.",
      screenshot: "/public/images/fiveTask.png",
      code: "import tkinter as tk\nfrom tkinter import scrolledtext\nimport datetime\n\n# Создаем основное окно\nroot = tk.Tk()\nroot.title(\"Чат\")\nroot.configure(bg=\"#f0f0f0\")\nroot.resizable(width=False,height=False)\n\n# Область для сообщений\nchat_area = scrolledtext.ScrolledText(root, width=50, height=20, bg=\"#ffffff\", fg=\"#000000\", font=(\"Arial\", 12), wrap=tk.WORD)\nchat_area.grid(row=0, column=0, columnspan=2, padx=10, pady=10)\nchat_area.config(state='disabled')\n\n# Настраиваем цвета для пользователей\nchat_area.tag_configure(\"user1\", foreground=\"blue\")\nchat_area.tag_configure(\"user2\", foreground=\"red\")\n\n# Поле для ввода\nmessage_entry = tk.Entry(root, width=40, bg=\"#ffffff\", fg=\"#000000\", font=(\"Arial\", 12))\nmessage_entry.grid(row=1, column=0, padx=10, pady=10)\n\n# Кнопка \"Отправить\"\nsend_button = tk.Button(root, text=\"Отправить\", bg=\"#4CAF50\", fg=\"#ffffff\", font=(\"Arial\", 12))\nsend_button.grid(row=1, column=1, padx=10, pady=10)\n\n# Переменная для текущего пользователя\ncurrent_user = \"Пользователь 1\"\n\n# Кнопки для переключения пользователей\nuser1_button = tk.Button(root, text=\"Пользователь 1\", command=lambda: set_user(\"Пользователь 1\"), bg=\"#2196F3\", fg=\"#ffffff\", font=(\"Arial\", 12))\nuser1_button.grid(row=2, column=0, padx=10, pady=10)\n\nuser2_button = tk.Button(root, text=\"Пользователь 2\", command=lambda: set_user(\"Пользователь 2\"), bg=\"#FF5722\", fg=\"#ffffff\", font=(\"Arial\", 12))\nuser2_button.grid(row=2, column=1, padx=10, pady=10)\n\n# Функция для переключения пользователей\ndef set_user(user):\n    global current_user\n    current_user = user\n\n# Функция отправки сообщения\ndef send_message():\n    message = message_entry.get()\n    if message:\n        timestamp = datetime.datetime.now().strftime(\"%H:%M:%S\")\n        full_message = f\"[{timestamp}] {current_user}: {message}\\n\"\n        \n        chat_area.config(state='normal')\n        if current_user == \"Пользователь 1\":\n            chat_area.insert(tk.END, full_message, \"user1\")\n        else:\n            chat_area.insert(tk.END, full_message, \"user2\")\n        chat_area.config(state='disabled')\n        \n        chat_area.see(tk.END)\n        message_entry.delete(0, tk.END)\n\n# Привязка кнопки\nsend_button.config(command=send_message)\n\n# Отправка сообщения при нажатии на Enter\ndef send_message_event(event):\n    send_message()\n\nmessage_entry.bind(\"<Return>\", send_message_event)\n\nroot.mainloop()",
    },
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
