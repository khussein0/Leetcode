/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function(n, meetings) {
    meetings.sort((a,b) => a[0] - b[0]);
    const roomTime = Array(n).fill(0), roomFreq = Array(n).fill(0);
    
    for(let [start, end] of meetings){
        let freeRoomIdx = roomTime.findIndex(end => end <= start);
        
        if(freeRoomIdx < 0) freeRoomIdx = roomTime.indexOf(Math.min(...roomTime));
        roomFreq[freeRoomIdx]++;
        
        let lastMeetingEnd = roomTime[freeRoomIdx],
            meetingEndTime = (start < lastMeetingEnd) ? (lastMeetingEnd - start) + end : end;
        
        roomTime[freeRoomIdx] = meetingEndTime;
    }
    
    return roomFreq.indexOf(Math.max(...roomFreq));
};