#pragma strict

public static var currentScore : int = 0;
private static var maxScore = -1;

function Start () {

}

function Update () {
	Debug.Log("currentScore is : " + currentScore);
	
	
}

function OnGUI(){
	GUI.Box (new Rect (200, 0, 400, 20), "Score: " + currentScore + " ; Max Score: " + maxScore);
}

public static function Reset(){
	if (currentScore > maxScore) {
		maxScore = currentScore;
	}else{
	//nothing for now
	}
	
	currentScore = 0;
}