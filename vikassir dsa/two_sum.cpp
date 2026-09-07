vector<int> twoSum(vector<int>& nums, int target){
    unordered_map<int, int> box;
    vector<int> result;
    for(int i = 0; i < nums.size(); i++){
        int a = nums[i];
        int b = target - nums[i];
        if(box.find(b) != box.end()){
            result.push_back(i);
            result.push_back(box[b]);  
            return result;            
        }else{
            box[nums[i]] = i;
        }
    }
    return result;
}
