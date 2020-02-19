List<T> join<T>(List<T> original, T separator) {
  final result = <T>[];
  for (int i = 0; i < original.length - 1; i++) {
    result.add(original[i]);
    result.add(separator);
  }
  result.add(original.last);
  return result;
}