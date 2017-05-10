// FractalTree 2D v1.0 - 10.8.2011 - mgear - http://unitycoder.com/blog/
// Original code from: http://rosettacode.org/wiki/Fractal_tree#JavaScript
// INFO: attach this script to (empty) gameObject



private var deg_to_rad:float = Mathf.PI / 180.0;
private var depth:int = 13; // gets super slow, if you increase this over 14-15..
private var scale:float = 0.2;
private var startTime:float;
private var season:int = 0; // 0=winter,1=spring,2=summer,3=fall
//public var Material aaa;
function Start()
{
	// draw a fractal tree
	drawTree(0, 0, 90, depth); // x, y, angle, depth
	startTime = Time.time;
	Debug.Log("time:");
	Debug.Log(startTime);
}

function Update() {  // loops every frame


	if (Time.time - startTime > 10) {
		Debug.Log("yo");
		//change season
		season++;
		season = season%4;
		changeSeason();
		startTime = Time.time;

	}


}

function changeSeason() {

	if (season == 1) {
		var tempStartTime = Time.time;
		while (Time.time - tempStartTime < 0.25) {
			
		}
		depth--;
		drawTree(0,0,90,depth);
		Debug.Log("mama");
		tempStartTime = Time.time;
		while (Time.time - tempStartTime < 0.25) {
			
		}
		depth--;
		drawTree(0,0,90,depth);
		//change node by one
		tempStartTime = Time.time;
		while (Time.time - tempStartTime < 0.25) {
			
		}
		depth--;
		drawTree(0,0,90,depth);
		//change node by one
		tempStartTime = Time.time;
		while (Time.time - tempStartTime < 0.25) {
			
		}
		depth--;
		drawTree(0,0,90,depth);
		//change node by one
	}

	//change season colors

}

// this function is pretty much straight from the original code
function drawTree(x1, y1, angle, depth)
{
	if (depth != 0)
	{
		var x2 = x1 + (Mathf.Cos(angle * deg_to_rad) * depth * scale);
		var y2 = y1 + (Mathf.Sin(angle * deg_to_rad) * depth * scale);
		drawLine(x1, y1, x2, y2, depth);
		drawTree(x2, y2, angle - 20, depth - 1);
		drawTree(x2, y2, angle + 20, depth - 1);
	}
}

function drawLine(x1, y1, x2, y2, color) // color variable is current depth, could be used for coloring different depths
{
	// create gameObject for 1 branch
	var branch : GameObject;
	branch = new GameObject ("branch");

	// make this branch child of our main gameobject
	branch.transform.parent = gameObject.transform;

	// add line renderer to our gameobject
	var line = branch.AddComponent(LineRenderer);
	line.GetComponent.<Renderer>().enabled = true;


// ** uncomment these following lines, for setting linerenderer materials on the fly, based on depth (materials should be placed in resources folder)
	if (color>4)
	{
		//line.material = Resources.Load("mtree_bark");
		line.material = Resources.Load("bark");
		line.SetWidth(color*0.08, color*0.06); // branch width using color (=depth) variable, so we get thinner every step
	}else{
		line.material = Resources.Load("leaves");
		line.SetWidth(color*1, color*0.5); //thicker leaves
	}

   
	//draw the actual line. Since original script is 2D, so we set Z=0
	line.SetPosition(0, Vector3(x1,y1,0));
	line.SetPosition(1, Vector3(x2,y2,0));
}
