"use strict";var submitBtn=document.querySelector(".form-submit"),form=document.querySelector(".form-layout"),firstNameInput=form.querySelector("#first-name"),lastNameInput=form.querySelector("#last-name"),emailInput=form.querySelector("#email"),subjectInput=form.querySelector("#subject"),massageInput=form.querySelector("#massage-text"),faultCounter=0,emailValid=function(){emailInput.value.includes("@")?(emailInput.classList.remove("invalid"),faultCounter=0):(emailInput.classList.add("invalid"),faultCounter++)},inputValid=function(e){e.value.length<3?(e.classList.add("invalid"),faultCounter++):(e.classList.remove("invalid"),faultCounter=0)},footerYear=document.querySelector(".footer-year"),footerYearChangeHandler=function(){var e=(new Date).getFullYear();footerYear.textContent=e};footerYearChangeHandler(),form.addEventListener("submit",function(e){e.preventDefault(),inputValid(firstNameInput),inputValid(lastNameInput),emailValid(),console.log(faultCounter),0==faultCounter&&(submitBtn.classList.add("loading"),submitBtn.disabled=!0,setInterval(function(){submitBtn.classList.remove("loading"),submitBtn.disabled=!1,firstNameInput.value="",lastNameInput.value="",emailInput.value="",subjectInput.value="",massageInput.value=""},3e3))});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJzdWJtaXRCdG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JtIiwiZW1haWxJbnB1dCIsInN1YmplY3RJbnB1dCIsIm1hc3NhZ2VJbnB1dCIsImZhdWx0Q291bnRlciIsImNsYXNzTGlzdCIsImluY2x1ZGVzIiwicmVtb3ZlIiwiYWRkIiwiaW5wdXRWYWxpZCIsImlucHV0IiwidmFsdWUiLCJsZW5ndGgiLCJmb290ZXJZZWFyQ2hhbmdlSGFuZGxlciIsInNldEludGVydmFsIiwiZ2V0RnVsbFllYXIiLCJmb290ZXJZZWFyIiwiZmlyc3ROYW1lSW5wdXQiLCJ5ZWFyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJsYXN0TmFtZUlucHV0IiwiZW1haWxWYWxpZCIsImNvbnNvbGUiLCJsb2ciLCJkaXNhYmxlZCJdLCJtYXBwaW5ncyI6ImFBQ0EsSUFBTUEsVUFBWUMsU0FBU0MsY0FBYyxjQUF2QixFQUVaQyxLQUFPRixTQUFTQyxjQUFjLGNBQXZCRCxFQUtQRyxlQUFrQkYsS0FBQUEsY0FBYyxhQUFkQSxFQUNsQkcsY0FBZUYsS0FBS0QsY0FBYyxZQUFuQkMsRUFDZkcsV0FBZUgsS0FBS0QsY0FBYyxRQUFuQkMsRUFHakJJLGFBQUpKLEtBQUFELGNBQUEsVUFBQSxFQUhNSSxhQUFlSCxLQUFLRCxjQUFjLGVBQW5CLEVBUXBCRSxhQUFXSSxFQUtYSixXQUFXSSxXQU5USixXQU9GRyxNQUFZRSxTQUFBLEdBUFYsR0FDRkwsV0FRQUksVUFBQUUsT0FBQSxTQVJBLEVBRkRILGFBQUEsSUFPQ0gsV0FTT0ksVUFBVUcsSUFBSSxTQVRyQixFQUNBSixZQVNDQSxHQU5ELEVBZ0JESyxXQUFBLFNBQUFDLEdBR0FBLEVBQUFDLE1BQUFDLE9BQUEsR0FFQUYsRUFBQUwsVUFBQUcsSUFBQSxTQUFBLEVBZkVKLFlBQVksS0FHWk0sRUFBTUwsVUFBVUUsT0FBTyxTQUF2QixFQWlCRkgsYUFBTVMsRUFBTixFQWlCR2hCLFdBQVVRLFNBQWNOLGNBQXhCLGNBQVVNLEVBR1hTLHdCQUFrQixXQW5CbkIsSUFvQkVqQixHQUFBQSxJQUFVUSxNQUFWVSxZQUFBbEIsRUFsQkZtQixXQW9CRUMsWUFBQUMsQ0FuQkYsRUFFREwsd0JBb0JnQkYsRUFsQmhCWCxLQVlhbUIsaUJBQVgsU0FBQSxTQUFBQyxHQVhEQSxFQXFCQ0MsZUFyQkQsRUFERFosV0F3QkFRLGNBQUEsRUFyQkNSLFdBQVdhLGFBQUQsRUFDVkMsV0FBVSxFQUVWQyxRQUFRQyxJQUFJckIsWUFBWixFQUVvQixHQUFoQkEsZUFDRlAsVUFBVVEsVUFBVUcsSUFBSSxTQUF4QixFQUNBWCxVQUFVNkIsU0FBVyxDQUFBLEVBRXRCWixZQUFhLFdBQ1pqQixVQUFVUSxVQUFVRSxPQUFPLFNBQTNCLEVBQ0FWLFVBQVU2QixTQUFXLENBQUEsRUFDckJULGVBQWVOLE1BQVEsR0FDdkJXLGNBQWNYLE1BQVEsR0FDdEJWLFdBQVdVLE1BQVEsR0FDbkJULGFBQWFTLE1BQVEsR0FDckJSLGFBQWFRLE1BQVEsRUFDckIsRUFBQyxHQVJTLEVBV1osQ0F2QkQiLCJmaWxlIjoic2NyaXB0LW1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1zdWJtaXQnKTtcclxuXHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tbGF5b3V0XCIpO1xyXG5cclxuXHJcbmNvbnN0IGZpcnN0TmFtZUlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjZmlyc3QtbmFtZScpO1xyXG5jb25zdCBsYXN0TmFtZUlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjbGFzdC1uYW1lJyk7XHJcbmNvbnN0IGVtYWlsSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNlbWFpbCcpO1xyXG5jb25zdCBzdWJqZWN0SW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNzdWJqZWN0Jyk7XHJcbmNvbnN0IG1hc3NhZ2VJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignI21hc3NhZ2UtdGV4dCcpO1xyXG5cclxuXHJcbmxldCBmYXVsdENvdW50ZXIgPSAwO1xyXG5cclxuXHJcbmNvbnN0IGVtYWlsVmFsaWQgPSAoKSA9PntcclxuaWYoZW1haWxJbnB1dC52YWx1ZS5pbmNsdWRlcygnQCcpKXtcclxuXHRlbWFpbElucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTtcclxuXHRmYXVsdENvdW50ZXIgPSAwXHJcbn1cclxuZWxzZXtcclxuXHRcclxuXHRlbWFpbElucHV0LmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcclxuXHRmYXVsdENvdW50ZXIrKztcclxuXHRcclxufVxyXG59XHJcblxyXG5jb25zdCBpbnB1dFZhbGlkID0gKGlucHV0KSA9PntcclxuXHJcblx0aWYoaW5wdXQudmFsdWUubGVuZ3RoIDwzKXtcclxuXHRcdGlucHV0LmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcclxuXHRcdGZhdWx0Q291bnRlcisrO1xyXG5cdFx0XHJcblx0fWVsc2V7XHJcblx0XHRpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJyk7XHJcblx0XHRmYXVsdENvdW50ZXI9MDtcclxuXHRcdFxyXG5cdH1cclxufVxyXG5cclxuXHJcbi8vIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoZXZlbnQpID0+e1xyXG4vLyBcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4vLyBcdC8vIGVtYWlsVmFsaWQoKTtcclxuXHJcbi8vIH1cclxuXHJcblxyXG5jb25zdCBmb290ZXJZZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb290ZXIteWVhclwiKTtcclxuXHJcbmNvbnN0IGZvb3RlclllYXJDaGFuZ2VIYW5kbGVyID0gKCkgPT4ge1xyXG5cdGNvbnN0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XHJcblxyXG5cdGZvb3RlclllYXIudGV4dENvbnRlbnQgPSB5ZWFyO1xyXG59O1xyXG5cclxuZm9vdGVyWWVhckNoYW5nZUhhbmRsZXIoKTtcclxuXHJcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgIGZ1bmN0aW9uKGV2ZW50KXtcclxuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdGlucHV0VmFsaWQoZmlyc3ROYW1lSW5wdXQpO1xyXG5cdGlucHV0VmFsaWQobGFzdE5hbWVJbnB1dCk7XHJcblx0ZW1haWxWYWxpZCgpO1xyXG5cdFxyXG5cdGNvbnNvbGUubG9nKGZhdWx0Q291bnRlcik7XHJcblxyXG5cdGlmIChmYXVsdENvdW50ZXIgPT0gMCkge1xyXG5cdFx0XHRzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnbG9hZGluZycpXHJcblx0XHRcdHN1Ym1pdEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG5cdFx0c2V0SW50ZXJ2YWwoICgpID0+e1xyXG5cdFx0XHRzdWJtaXRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpXHJcblx0XHRcdHN1Ym1pdEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cdFx0XHRmaXJzdE5hbWVJbnB1dC52YWx1ZSA9ICcnXHJcblx0XHRcdGxhc3ROYW1lSW5wdXQudmFsdWUgPSAnJztcclxuXHRcdFx0ZW1haWxJbnB1dC52YWx1ZSA9ICcnO1xyXG5cdFx0XHRzdWJqZWN0SW5wdXQudmFsdWUgPSAnJztcclxuXHRcdFx0bWFzc2FnZUlucHV0LnZhbHVlID0gJyc7XHJcblx0XHR9LDMwMDBcclxuXHRcdClcclxuXHR9XHJcbn0pXHJcbi8vIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdidXR0b24nLCBzdWJtaXRIYW5kbGVyKTtcclxuIl19