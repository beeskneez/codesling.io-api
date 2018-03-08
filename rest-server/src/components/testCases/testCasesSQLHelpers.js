export const addTestCaseHelper = ({ testinput, testoutput, challenge_id }) => {
  return `
    INSERT INTO testCases (testinput, testouput, challenge_id)
    VALUES ('${testinput}', '${testoutput}', ${challenge_id})
  `;
};
