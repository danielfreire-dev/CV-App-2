export function handleData(e) {
  setData({
    ...data,
    [e.target.name]: e.target.value,
  });
}

export function handleJob(e) {
  setEducation({
    ...data,
    [e.target.name]: e.target.value,
  });
}
export function handleEducation(e) {
  setJob({
    ...education,
    [e.target.name]: e.target.value,
  });
}
