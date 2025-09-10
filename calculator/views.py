from django.shortcuts import render

def calculator_view(request):
    result = ""
    expression = ""

    if request.method == "POST":
        expression = request.POST.get("expression", "")

        try:
            # ⚡ Evaluate safely
            result = eval(expression)
        except Exception:
            result = "Error"

    # return must be OUTSIDE the if block
    return render(request, "index.html", {"result": result, "expression": expression})
