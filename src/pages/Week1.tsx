
import { TaskCardWithCode } from "@/components/TaskCardWithCode";

const Week1 = () => {
  const tasks = [
    {
      title: "1.1 Задача линейного алгоритма",
      description: "Зарплату увеличили на 25%, после чего она составила 60 000 рублей. Какой была исходная зарплата?",
      screenshot: "/public/firstWeek/firstTask.png",
      code: "internal class Program\n{\n    static void Main(string[] args)\n    {\n        Console.WriteLine(\"ЗП увеличили на 25%, после чего она стала 60.000 рублей\");\n        Console.WriteLine($\"Исходная ЗП была: {CalculateSalary(60000, 25)}\");\n    }\n\n    public static float CalculateSalary(int newSalary, int increasePercent) => newSalary / (1 + increasePercent / 100);\n}"
    },
    {
      title: "1.2 Задача разветвляющегося алгоритма",
      description: "По трём сторонам определите: равносторонний, равнобедренный или разносторонний треугольник.",
      screenshot: "/public/firstWeek/secondTask.png",
      code: "internal class Program\n{\n    static void Main(string[] args)\n    {\n        int a, b, c;\n\n        Console.WriteLine(\"Введите первую челочисленную сторону треугольника: \");\n        a = EnterSides();\n        AddSpaces(2);\n        Console.WriteLine($\"Первая сторона: {a}\");\n        Console.WriteLine($\"Введите вторую челочисленную сторону треугольника:\");\n        b = EnterSides();\n        AddSpaces(2);\n        Console.WriteLine($\"Первая сторона: {a}, Вторая сторона: {b}\");\n        Console.WriteLine($\"Введите третью челочисленную сторону треугольника:\");\n        c = EnterSides();\n        AddSpaces(5);\n\n        Console.WriteLine(GetTriangleType(a, b, c));\n    }\n\n    public static int EnterSides()\n    {\n        while (true)\n        {\n            if (int.TryParse(Console.ReadLine(), out int x))\n                return x;\n            else\n                Console.WriteLine(\"Неверный ввод, пожалуйста, введите целое число!\");\n        }\n    }\n\n    public static string GetTriangleType(int a, int b, int c)\n    {\n        if (a + b <= c || a + c <= b || b + c <= a)\n            return \"Треугольник не существует\";\n\n        if (a == b && b == c)\n            return \"Равносторонний\";\n        else if (a == b || b == c || a == c)\n            return \"Равнобедренный\";\n        else\n            return \"Разносторонний\";\n    }\n\n    public static void AddSpaces(int countLines)\n    {\n        for (int i = 0; i < countLines; i++)\n            Console.WriteLine();\n    }\n}"
    },
    {
      title: "1.3 Задача циклического алгоритма",
      description: "Найдите все пары чисел в массиве, сумма которых равна заданному числу K.",
      screenshot: "/public/firstWeek/thirdTask.png",
      code: "internal class Program\n{\n    static void Main(string[] args)\n    {\n        int a, b, c;\n\n        Console.WriteLine(\"Введите первую челочисленную сторону треугольника: \");\n        a = EnterSides();\n        AddSpaces(2);\n        Console.WriteLine($\"Первая сторона: {a}\");\n        Console.WriteLine($\"Введите вторую челочисленную сторону треугольника:\");\n        b = EnterSides();\n        AddSpaces(2);\n        Console.WriteLine($\"Первая сторона: {a}, Вторая сторона: {b}\");\n        Console.WriteLine($\"Введите третью челочисленную сторону треугольника:\");\n        c = EnterSides();\n        AddSpaces(5);\n\n        Console.WriteLine(GetTriangleType(a, b, c));\n    }\n\n    public static int EnterSides()\n    {\n        while (true)\n        {\n            if (int.TryParse(Console.ReadLine(), out int x))\n                return x;\n            else\n                Console.WriteLine(\"Неверный ввод, пожалуйста, введите целое число!\");\n        }\n    }\n\n    public static string GetTriangleType(int a, int b, int c)\n    {\n        if (a + b <= c || a + c <= b || b + c <= a)\n            return \"Треугольник не существует\";\n\n        if (a == b && b == c)\n            return \"Равносторонний\";\n        else if (a == b || b == c || a == c)\n            return \"Равнобедренный\";\n        else\n            return \"Разносторонний\";\n    }\n\n    public static void AddSpaces(int countLines)\n    {\n        for (int i = 0; i < countLines; i++)\n            Console.WriteLine();\n    }\n}"
    },
    {
      title: "1.4 Задача на проектирование классов",
      description: "Разработайте класс Calculator с приватными полями для хранения промежуточных результатов и публичными методами для арифметических операций.",
      screenshot: "/public/firstWeek/fourthTask.png",
      code: "internal class Program\n{\n    static void Main(string[] args)\n    {\n        Calculator calc = new Calculator();\n\n        calc.Add(4);\n        calc.Multiply(2);\n        calc.Subtract(3);\n        calc.Divide(2);\n\n        Console.WriteLine($\"Результат: {calc.GetValue()}\");\n    }\n}\n\npublic class Calculator\n{\n    private double _currentValue;\n\n    public Calculator()\n    {\n        _currentValue = 0;\n    }\n\n    public double Add(double number)\n    {\n        _currentValue += number;\n        return _currentValue;\n    }\n\n    public double Subtract(double number)\n    {\n        _currentValue -= number;\n        return _currentValue;\n    }\n\n    public double Multiply(double number)\n    {\n        _currentValue *= number;\n        return _currentValue;\n    }\n\n    public double Divide(double number)\n    {\n        if (number == 0)\n            throw new DivideByZeroException(\"Нельзя делить на ноль\");\n\n        _currentValue /= number;\n        return _currentValue;\n    }\n\n    public void Clear()\n    {\n        _currentValue = 0;\n    }\n\n    public double GetValue()\n    {\n        return _currentValue;\n    }\n}\n\npublic class FinancialCalculator : Calculator\n{\n    public double CalculatePercentage(double percent)\n    {\n        return GetValue() * percent / 100;\n    }\n\n    public double CalculateOverpayment(double loanAmount, double annualRate, int months)\n    {\n        double monthlyRate = annualRate / 12 / 100;\n        double overpayment = loanAmount * monthlyRate * months;\n        return overpayment;\n    }\n\n    public double TotalToPay(double loanAmount, double annualRate, int months)\n    {\n        return loanAmount + CalculateOverpayment(loanAmount, annualRate, months);\n    }\n}\n\npublic class EngineeringCalculator : Calculator\n{\n    public double SquareRoot()\n    {\n        double value = GetValue();\n        if (value < 0)\n            throw new ArgumentException(\"Нельзя извлечь корень из отрицательного числа.\");\n        return Math.Sqrt(value);\n    }\n\n    public double Power(double exponent)\n    {\n        return Math.Pow(GetValue(), exponent);\n    }\n\n    public double Sin()\n    {\n        return Math.Sin(GetValue());\n    }\n\n    public double Cos()\n    {\n        return Math.Cos(GetValue());\n    }\n\n    public double Tan()\n    {\n        return Math.Tan(GetValue());\n    }\n}"
    },
    {
      title: "1.5 Задача с графическим интерфейсом",
      description: "Создайте игру в танки с графическим интерфейсом.",
      screenshot: "/public/firstWeek/fiveTask.png",
      code: "public class PlayerController : MonoBehaviour\n{\n    [SerializeField] private float moveSpeed = 5f;\n    private Rigidbody2D rb;\n\n    private void Start() => rb = GetComponent<Rigidbody2D>();\n\n    private void Update()\n    {\n        float moveX = (Input.GetKey(KeyCode.D) ? 1f : (Input.GetKey(KeyCode.A) ? -1f : 0f));\n        float moveY = (Input.GetKey(KeyCode.W) ? 1f : (Input.GetKey(KeyCode.S) ? -1f : 0f));\n\n        Vector2 moveDirection = new Vector2(moveX, moveY).normalized;\n\n        if (moveDirection.magnitude > 0f)\n        {\n            float angle = Mathf.Atan2(moveDirection.y, moveDirection.x) * Mathf.Rad2Deg - 90f;\n            transform.rotation = Quaternion.Euler(0f, 0f, angle);\n        }\n\n        rb.velocity = moveDirection * moveSpeed;\n    }\n}\n\nusing UnityEngine;\nusing System.Collections;\n\npublic class PlayerShooter : MonoBehaviour\n{\n    [SerializeField] private GameObject bulletPrefab;\n    [SerializeField] private Transform shootPoint;\n    [SerializeField] private float bulletSpeed = 10f;\n    [SerializeField] private float reloadTime = 1f;\n    [SerializeField] private KeyCode shootKey = KeyCode.Space;\n\n    private bool isReloading = false;\n\n    private void Update()\n    {\n        if (Input.GetKeyDown(shootKey) && !isReloading)\n        {\n            StartCoroutine(ReloadAndShoot());\n        }\n    }\n\n    private IEnumerator ReloadAndShoot()\n    {\n        Shoot();\n        isReloading = true;\n        yield return new WaitForSeconds(reloadTime);\n        isReloading = false;\n    }\n\n    private void Shoot()\n    {\n        GameObject bullet = Instantiate(bulletPrefab, shootPoint.position, shootPoint.rotation);\n        Rigidbody2D rb = bullet.GetComponent<Rigidbody2D>();\n        rb.velocity = shootPoint.up * bulletSpeed;\n    }\n}\n\nusing UnityEngine;\n\npublic class Bullet : MonoBehaviour\n{\n    private void OnCollisionEnter2D(Collision2D collision)\n    {\n        if (collision.gameObject.GetComponent<PlayerController>())\n        {\n            collision.gameObject.GetComponent<PlayerHealth>().Damage(1);\n        }\n        else if (collision.gameObject.GetComponent<PlayerController2>())\n        {\n            collision.gameObject.GetComponent<PlayerHealth>().Damage(0);\n        }\n        Destroy(gameObject);\n    }\n}"
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Первая неделя практики</h1>
      <div className="md:grid md:gap-8 md:grid-cols-2">
        {tasks.map((task, index) => (
          <TaskCardWithCode key={index} {...task} />
        ))}
      </div>
    </div>
  );
};

export default Week1;
