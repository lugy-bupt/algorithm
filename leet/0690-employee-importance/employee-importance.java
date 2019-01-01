/*
// Employee info
class Employee {
    // It's the unique id of each node;
    // unique id of this employee
    public int id;
    // the importance value of this employee
    public int importance;
    // the id of direct subordinates
    public List<Integer> subordinates;
};
*/
class Solution {
    public int getImportance(List<Employee> employees, int id) {
        HashMap<Integer, Employee> map = new HashMap<>();
        
        for(Employee employee : employees) {
            map.put(employee.id, employee);
        }
        
        return getImportance(map, id);
    }
    
    private int getImportance(HashMap<Integer, Employee> employees, int id){
        
        Employee em = employees.get(id);
        int result = em.importance;
        
        for (Integer subid : em.subordinates){
            result += getImportance(employees, subid);
        }
        
        return result;
    }
}
