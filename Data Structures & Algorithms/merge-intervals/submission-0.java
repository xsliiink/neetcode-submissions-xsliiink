
class Solution {
    public int[][] merge(int[][] intervals) {
        if (intervals.length <= 1) return intervals;

        // Сортировка (тут всё ок)
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));

        // ИСПРАВЛЕНО: добавили <int[]>
        List<int[]> result = new ArrayList<>();
        
        int[] currentInterval = intervals[0];
        result.add(currentInterval);

        for (int[] nextInterval : intervals) {
            int currentEnd = currentInterval[1];
            int nextStart = nextInterval[0];
            int nextEnd = nextInterval[1];

            if (nextStart <= currentEnd) {
                currentInterval[1] = Math.max(currentEnd, nextEnd);
            } else {
                currentInterval = nextInterval;
                result.add(currentInterval);
            }
        }

        // Теперь эта магия сработает
        return result.toArray(new int[result.size()][]);
    }
}