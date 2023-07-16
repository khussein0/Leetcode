/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
var smallestSufficientTeam = function(req_skills, people) {
    const idxMap = new Map();
    req_skills.forEach((skill, idx) => idxMap.set(skill, idx));
    const teamMap = new Map([[0, []]]);
    people.forEach((skills, idx) => {
        let hisSkills = 0;
        for(const skill of skills) hisSkills |= 1 << idxMap.get(skill);
        for(const [curSkill, team] of teamMap){
            const totalSkills = curSkill | hisSkills;
            if(totalSkills === curSkill) continue;
            if(!teamMap.has(totalSkills) || team.length + 1< teamMap.get(totalSkills).length) teamMap.set(totalSkills, [...team, idx]);
        };
    });
    
    return teamMap.get((1 << req_skills.length) - 1);
};