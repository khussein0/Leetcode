/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
    let len = heights.length - 1, heap = [,]
    const heapify = val => {
        let i = heap.length, par = i >> 1, temp
        heap.push(val)
        while (heap[par] > heap[i]) {
            temp = heap[par], heap[par] = heap[i], heap[i] = temp
            i = par, par = i >> 1
        }
    }
    const extract = () => {
        if (heap.length === 1) return null
        let top = heap[1], left, right, temp,
            i = 1, child = heap[3] < heap[2] ? 3 : 2
        if (heap.length > 2) heap[1] = heap.pop()
        else heap.pop()
        while (heap[i] > heap[child]) {
            temp = heap[child], heap[child] = heap[i], heap[i] = temp
            i = child, left = i << 1, right = left + 1
            child = heap[right] < heap[left] ? right : left
        }
        return top;
    }    
    for (let i = 0; i < len; i++) {
        let diff = heights[i+1] - heights[i]
        if (diff > 0) {
            if (ladders > 0) heapify(diff), ladders--
            else if (heap.length > 1 && diff > heap[1])
                heapify(diff), bricks -= extract()
            else bricks -= diff
            if (bricks < 0) return i
        }
    }
    return len;
};