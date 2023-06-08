/*
COMPLETE THE FOLLOWING TASKS WITHOUT MODIFYING ANY OF THE CODE IN THE HTML OR CSS FILE.

You should only write code in the JavaScript functions below, 
as well as update the `studentInformation` object with your personal information.

Each function is annotated with a comment explaining what it should do.

By the end of the lab, all tests in the report should be passing.
*/

const studentInformation = {
  name: "Lake",
  grade: "Bradford",
  advisor: "Jesenia Garcia-Rovetta",
  major: "Computer Science",
  graduationYear: "2025",
  imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fcodepath%2F&psig=AOvVaw2PRhlf9Ub_YoOv2Cwxq9nG&ust=1686275680384000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMiS88vIsv8CFQAAAAAdAAAAABAD"
}

let semester = "Spring Semester"

const studentData = {
  "Spring Semester": [
    { code: "LIT 101", name: "English Literature 101", semester: "Spring 2021", credits: 5, grade: "B+" },
    { code: "CS 50", name: "Intro to Computer Science", semester: "Spring 2021", credits: 5, grade: "A-" },
    { code: "WD 140", name: "Modern Web Development", semester: "Spring 2021", credits: 5, grade: "A+" },
    { code: "JS 2.0", name: "Serverside JavaScript", semester: "Spring 2021", credits: 10, grade: "A-" },
  ],
  "Fall Semester": [
    { code: "Math 600", name: "Differential Equations", semester: "Fall 2020", credits: 5, grade: "A-" },
    { code: "CS 10", name: "Python Programming", semester: "Fall 2020", credits: 5, grade: "A" },
    { code: "History 99", name: "History of Computers", semester: "Fall 2020", credits: 5, grade: "A-" },
    { code: "MD 00", name: "Meditation and Mindfullness", semester: "Fall 2020", credits: 5, grade: "A+" },
  ],
  "Winter Term": [
    { code: "PHYS ED", name: "Physical Activity", semester: "Winter 2020", credits: 5, grade: "A-" },
    { code: "GEN ED", name: "General Education Requirement", semester: "Winter 2020", credits: 5, grade: "A+" },
  ],
}

const gpaPointsLookup = {
  "A+": 4.0,
  A: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C: 2.0,
  "C-": 1.7,
  "D+": 1.3,
  D: 1.0,
  "D-": 0.7,
  F: 0.0,
}

/**
 * QUERY SELECTORS VARIABLES GO HERE
 */
const dropdownEl = document.querySelector(".dropdown")
const studentNameElement = document.getElementById("student-name")
const studentAdvisorElement = document.getElementById("student-advisor")
const studentMajorElement = document.getElementById("student-major")
const studentGradeLevelElement = document.getElementById("student-grade-level")
const studentGraduationYearElement = document.getElementById("student-graduation-year")
const studentImageElement = document.getElementById("student-image")
const semesterDropdownDivElement = document.querySelector(".semester-dropdown")
const semesterDropdownHtwoElement = document.querySelector(".dropdown-button") 
const semesterDropdownLabelElement = document.querySelector(".dropdown-label")
const fallSemesterElement = document.getElementById("fall-semester")
const springSemesterElement = document.getElementById("spring-semester")
const winterTermElement = document.getElementById("winter-term")
const reportCardTableElement = document.getElementById("report-card-table")


// ADD more query selectors here

/**
 * SOLUTIONS FOR STUDENT INFO DOM UPDATES
 */

/**
 * Modify the report card to display the correct grade level from the lookup table above.
 *
 * @param {String} studentName - the name of the student
 */
function updateStudentName(studentName) {

  studentNameElement.innerHTML = studentName

  
}





/**
 * Modify the report card to display the correct grade level from the lookup table above.
 *
 * @param {String|Number} studentGradeLevel - the grade level of the student
 */
function updateStudentGradeLevel(studentGradeLevel) {
  studentGradeLevelElement.innerHTML = studentGradeLevel
  
}

/**
 * Modify the report card to display the correct advisor from the lookup table above.
 *
 * @param {String} studentAdvisor - the advisor of the student
 */
function updateStudentAdvisor(studentAdvisor) {
  studentAdvisorElement.innerHTML = studentAdvisor
}

/**
 * Modify the report card to display the correct major from the lookup table above.
 *
 * @param {String} studentMajor - the major of the student
 */
function updateMajor(studentMajor) {
  studentMajorElement.innerHTML = studentMajor
}

/**
 * Modify the report card to display the correct graduation year from the lookup table above
 *
 * @param {Number} graduationyear - the year the student graduates
 */
function updateStudentGraduationYear(graduationYear) {
  studentGraduationYearElement.innerHTML = graduationYear
}

/**
 * Modify the img element using `setAttribute` so that that the src attribute
 * stores the link to your image.
 *
 * @param {String} url - a link to an image
 */
function updateStudentImage(imageUrl) {
  studentImageElement.innerHTML = imageUrl
}

/**
 * This function should run as soon as the page loads and update the correct student info
 */
function populateStudentInfo(studentInformationObject) {
  updateStudentName(studentInformationObject.name)
  updateStudentGradeLevel(studentInformationObject.grade)
  updateStudentAdvisor(studentInformationObject.advisor)
  updateMajor(studentInformationObject.major)
  updateStudentGraduationYear(studentInformationObject.graduationYear)
  updateStudentImage(studentInformationObject.imageUrl)
}
populateStudentInfo(studentInformation)

/**
 * SOLUTION FOR INNER HTML DOM UPDATES
 */

/**
 * This function should add a headers row to the report card table
 */
function addReportCardHeaders(reportCardTableElement) {
  // update the code here
  let reportCardTable = document.querySelector(".report-card-table")
  let tableHeader = document.createElement("div")
  tableHeader.className = "code-col"
  reportCardTable.append(tableHeader)
  let codeCol = document.createElement("h4")
  tableHeader.className = "code-col"
  tableHeader.append(codeCol)
  let nameCol = document.createElement("h4")
  tableHeader.className = "name-col"
  tableHeader.append(nameCol)
  let semCol = document.createElement("h4")
  tableHeader.className = "sem-col"
  tableHeader.append(semCol)
  let credCol = document.createElement("h4")
  tableHeader.className = "cred-col"
  tableHeader.append(credCol)
  let lettCol = document.createElement("h4")
  tableHeader.className = "lett-col"
  tableHeader.append(lettCol)


  console.log(reportCardTable)

  reportCardTableElement.innerHTML += ``
}

/**
 * This function should take in a single course and create a row with the
 * course code, course name, course semester, course credits, course letter grade, and course points columns.
 *
 * @param {Object} course
 * @param {Number} rowNum
 */
function addCourseRowToReportCard(reportCardTableElement, course, rowNum) {
  // update the code here with information about the course passed to this function
  reportCardTableElement.innerHTML += `
  <div class="table-row course-row row-${rowNum + 1} ${rowNum % 2 === 1 ? "odd" : "even"}">

  </div>
  `
}

/**
 * This function should add HTML for the totals row in the report card.
 */
function addTotalsRow(reportCardTableElement) {
  reportCardTableElement.innerHTML += ``
}

/**
 * This function should add HTML for the final row in the report card.
 */
function addGpaRow(reportCardTableElement) {
  reportCardTableElement.innerHTML += ``
}

/**
 * This is the primary function used to update the report card when the semester changes
 *
 * It should call the other functions responsible for creating the necessary HTML
 *
 */
function updateReportCard(reportCardTableElement, currentSemester) {
  // update the dropdown label
  updateDropdownLabel()
  // reset the report card table's inner html to an empty string
  if (reportCardTableElement) reportCardTableElement.innerHTML = ''

  addReportCardHeaders(reportCardTableElement)
  //locate semester
  
  studentData[semester].forEach(col => addReportCardHeaders(col))





}

/**
 * SOLUTION FOR DROPDOWN EVENT HANDLERS
 */

/**
 * These two functions should be used to toggle the dropdown.
 *
 * If the dropdown classList contains the "closed" class, the 'openDropdown' function should remove it.
 * If the dropdown classList doesn't contain the "closed" class, 'closeDropdown' function should add it.
 */
function closeDropdown(dropdownElement) {
  if(!dropdownElement.classList.contains("closed")){
    dropdownElement.classList.add("closed")
  }

  
}

function openDropdown(dropdownElement) {
  if(dropdownElement.classList.contains("closed")){
    console.log(' closed')
    dropdownElement.classList.remove("dropdown-closed")

  }
}

/**
 * This function should update the inner html of the dropdown label to be the current
 * value stored in the `semester` variable.
 *
 */
function updateDropdownLabel() {
  // code goes here
}

/**
 * This function should add the proper event listeners to the correct DOM elements
 * responsible for managing the state of the dropdown menu.
 *
 */
function addEventListeners(
  dropdownElement,
  dropdownButtonElement,
  reportCardTableElement,
  fallSemesterElement,
  springSemesterElement,
  winterTermElement
) {

  // Add an event listener for the dropdown button that calls the openDropdown function with the correct DOM elemenT
  dropdownButtonElement.addEventListener("click", function() {
    openDropdown(dropdownElement)
  })
  // Add 3 event listeners - one for the fall semester option, the spring semester option, and the winter term option
  // fallSemesterElement.addEventListener("click",)
  // springSemesterElement.addEventListener("click",)
  // winterTermElement.addEventListener("click",)
  // Each callback function one should update the `semester` variable,
  // call the `updateReportCard` function, and close the dropdown
}

/***************
   CALCULATIONS
****************/

/**
 * Use query selectors on the `reportCardTableElement` element
 * to access the credits the student has earned for each course.
 * Add them up and display the total in the proper location.
 *
 * It may be useful to check for the existence of certain elements
 * before updating the DOM.
 *
 */
function addUpStudentCredits(reportCardTableElement) {
  // code goes here
}

/**
 * Use query selectors on the `reportCardTableElement` element
 * to access the letter grades for each course and convert them to GPA points using
 * the `pointsLookup` object.
 *
 * That English Literature grade is keeping us from all A's! Let's see if we can't update that to an A-
 * since we definitely deserve it after a hard semester of work.
 *
 * Then perform a quick calculation and update the report card with the total points and
 * cumulative grade point average for the semester.
 *
 */

function calculateSemesterGpa(reportCardTableElement) {
  // code goes here
}

window.onload = function () {
  updateReportCard(semester)
  let dropdownButtonElement =  document.querySelector(".dropdown-button")
  let dropdownElement = document.querySelector(".semester-dropdown").Children
  console.log("dropdowns")
  console.log(dropdownElement)
  console.log(dropdownButtonElement)

  addEventListeners(  dropdownElement,
    dropdownButtonElement,
    reportCardTableElement,
    fallSemesterElement,
    springSemesterElement,
    winterTermElement)
  // execute your functions here to make sure they run as soon as the page loads
}

