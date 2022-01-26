addStudentForm.addEventListener('submit',addStudent)

/**
 * Lists of Classes
 */
const classA = allStudent.filter((student) => student.className == 'A')
const classB = allStudent.filter((student) => student.className == 'B')
const classC = allStudent.filter((student) => student.className == 'C')

/**
 * Student List, Average and graphs of all classes
 */
function classFullRender(){
    classAverageContainer.innerHTML =''
    studentListA.innerHTML =''
    classAverageContainer.classList.add('visible')
    classAverageContainer.classList.remove('invisible')
    classReport.classList.add('visible')
    classReport.classList.remove('invisible')
    const classFullMathAverage = lessonAverageRender(allStudent,'Maths')
    const classFullChemistAverage = lessonAverageRender(allStudent,'Chemist')
    const classFullPyhsicAverage = lessonAverageRender(allStudent,'Pyhsic')
    const classFullBiologietAverage = lessonAverageRender(allStudent,'Biologie') 
    renderAverageTitle(classAverageContainer,classFullMathAverage,classFullChemistAverage,classFullPyhsicAverage,classFullBiologietAverage)
    chartJS(allStudent,ctx)
    chartJS(classA,ctx1)
    chartJS(classB,ctx2)
    chartJS(classC,ctx3)    
}
/**
 * Student List, Average and graphs of Class A
 */

function classARender(){
    classAverageContainer.innerHTML =''
    classAverageContainer.classList.add('visible')
    classAverageContainer.classList.remove('invisible')
    classReport.classList.remove('visible')
    classReport.classList.add('invisible')
    const classAMathAverage = lessonAverageRender(classA,'Maths')
    const classAChemistAverage = lessonAverageRender(classA,'Chemist')
    const classAPyhsicAverage = lessonAverageRender(classA,'Pyhsic')
    const classABiologietAverage = lessonAverageRender(classA,'Biologie')
    classRender(classA,studentListA)
    renderAverageTitle(classAverageContainer,classAMathAverage,classAChemistAverage,classAPyhsicAverage,classABiologietAverage)
   
}
/**
 * Student List, Average and graphs of Class B
 */
function classBRender(){
    classAverageContainer.innerHTML =''
    classAverageContainer.classList.add('visible')
    classAverageContainer.classList.remove('invisible')
    classReport.classList.remove('visible')
    classReport.classList.add('invisible')
    const classBMathAverage = lessonAverageRender(classB,'Maths')
    const classBChemistAverage = lessonAverageRender(classB,'Chemist')
    const classBPyhsicAverage = lessonAverageRender(classB,'Pyhsic')
    const classBBiologietAverage = lessonAverageRender(classB,'Biologie')
    classRender(classB,studentListA)
    renderAverageTitle(classAverageContainer,classBMathAverage,classBChemistAverage,classBPyhsicAverage,classBBiologietAverage)

}
/**
 * Student List, Average and graphs of Class B
 */

function classCRender(){
    classAverageContainer.innerHTML =''
    classAverageContainer.classList.add('visible')
    classAverageContainer.classList.remove('invisible')
    classReport.classList.remove('visible')
    classReport.classList.add('invisible')
    const classCMathAverage = lessonAverageRender(classC,'Maths')
    const classCChemistAverage = lessonAverageRender(classC,'Chemist')
    const classCPyhsicAverage = lessonAverageRender(classC,'Pyhsic')
    const classCBiologietAverage = lessonAverageRender(classC,'Biologie')
    classRender(classC,studentListA)
    renderAverageTitle(classAverageContainer,classCMathAverage,classCChemistAverage,classCPyhsicAverage,classCBiologietAverage)
  
}

function addStudent(e){
    e.preventDefault()
      let newStudent = {
          name : e.target['studentName'].value,
          className : e.target['inputGroupSelect01'].value,
          lessons : [
                      {lessonName:'Maths' , lessonScore : e.target['studentMaths'].value},
                      {lessonName:'Pyhsic' , lessonScore : e.target['studentPyhsic'].value},
                      {lessonName:'Chemist' , lessonScore : e.target['studentChemist'].value},
                      {lessonName:'Biologie' , lessonScore : e.target['studentBiologie'].value},      
                    ]    
       } 
  
      allStudent.push(newStudent)
      console.log(allStudent)
      renderHomePage()
      addStudentForm.reset()
         
  }
  
  function deleteStudent() {
  
    
  }
  
  