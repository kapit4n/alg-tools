# COMMON FUNCTIONS USED IN AN ALGORITHM WITH JAVA

## FLAT. Default depth is 1

```
String[][] = new String[][]{{"a", "b"}, {"c", "c"}};
Stream<String[]> temp = Arrays.stream(data);
Stream<String> stringStream = temp.flatMap(x -> Arrays.stream(x));
```

## GROUP BY

```
List<String> items = Arrays.asList("apple", "apple", "banana", "apple");
Map<String, Long> result = items.stream().collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));
```

## SORTING

```
List<Human> humans = List.newArrayList(new Human("Sarah", 10), new Human("Jack", 12));
humans.sort((Human h1, Human h2) -> h1.getName().compareTo(h2.getName()));
```

## FILTER

```
List<String> lines = Arrays.asList("string", "node", "mkyong");
List<String> result = lines.stream().filter(line -> !"mkyong".equals(line)).collect(Collections.toList());
```

## FIND, gets the first element

```
List<Integer> list = Arrays.asList(1, 10, 3, 7, 5);
int a = list.stream().filter(x -> x > 5).findFirst().get();
```

## SPLIT

```
String[] splitted = "peter,james,thomas".split(",");

```

## SUBSTRING

```
String value = "cats and dogs";
String cat = value.substring(0, 3);
```

## FOREACH

```
for (String name: names) System.out.println(name);

names.forEach(name -> System.out.println(name));

namesMap.forEach((key, value) -> System.out.println(key + " " + value));
```

## WHILE

```
while(count < 11) {
    System.out.println("Count is: " + count);
    count++;
}
```

## ASSIGN

```
public Person(Person, original) {
    this.id = original.id + 1;
    this.name = new String(original.name);
    this.city = new City(original.city);
}
```

## MAP

```
List<Integer> collect1 = num.stream().map(c -> n * 2).collect(Collectors.toList());

```

## REDUCE

```
double average = roster.stream().filter(p -> p.getGender() == Person.Sex.MALE).mapToInt(Person::getAge).average().getAsDouble();
Integer totalAge = roster.stream().mapToInt(Person::getAge).sum();
```
